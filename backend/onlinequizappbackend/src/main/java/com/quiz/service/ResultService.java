package com.quiz.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quiz.dto.DashboardStats;
import com.quiz.dto.LeaderboardDTO;
import com.quiz.entity.Result;
import com.quiz.repository.ResultRepository;

@Service
public class ResultService {

    @Autowired
    private ResultRepository repository;

    public Result save(Result result){
        return repository.save(result);
    }

    public List<LeaderboardDTO> leaderboard() {

        List<Result> results = repository.findAll();

        Map<String, LeaderboardDTO> map = new HashMap<>();

        for (Result result : results) {

            String name = result.getStudentName();

            if (!map.containsKey(name)) {

                map.put(name,
                        new LeaderboardDTO(
                                name,
                                result.getPercentage(),
                                1));

            } else {

                LeaderboardDTO dto = map.get(name);

                dto.setQuizzesTaken(dto.getQuizzesTaken() + 1);

                if (result.getPercentage() > dto.getHighestScore()) {

                    dto.setHighestScore(result.getPercentage());

                }

            }

        }

        List<LeaderboardDTO> leaderboard =
                new ArrayList<>(map.values());

        leaderboard.sort((a, b) ->
                Integer.compare(
                        b.getHighestScore(),
                        a.getHighestScore()));

        return leaderboard;

    }
    public DashboardStats getDashboardStats(String studentName){

        List<Result> myResults =
                repository.findByStudentName(studentName);

        DashboardStats stats = new DashboardStats();

        stats.setQuizzesTaken(myResults.size());

        int highest = 0;

        int total = 0;

        for(Result r : myResults){

            total += r.getPercentage();

            if(r.getPercentage() > highest){

                highest = r.getPercentage();

            }

        }

        stats.setHighestScore(highest);

        if(!myResults.isEmpty()){

            stats.setAverageScore(total / myResults.size());

        }

        List<Result> leaderboard =
                repository.findAllByOrderByPercentageDesc();

        int rank = 1;

        for(Result r : leaderboard){

            if(r.getStudentName().equals(studentName)){

                stats.setRank(rank);

                break;

            }

            rank++;

        }

        return stats;

    }
}