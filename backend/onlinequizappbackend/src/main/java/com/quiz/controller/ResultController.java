package com.quiz.controller;

import java.util.List;
import com.quiz.dto.DashboardStats;
import com.quiz.dto.LeaderboardDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.quiz.entity.Result;
import com.quiz.service.ResultService;

@RestController
@RequestMapping("/results")
@CrossOrigin(origins="*")
public class ResultController {

    @Autowired
    private ResultService service;

    @PostMapping("/save")
    public Result save(@RequestBody Result result){

        return service.save(result);

    }

    @GetMapping("/leaderboard")
    public List<LeaderboardDTO> leaderboard(){

        return service.leaderboard();

    }
    @GetMapping("/dashboard/{studentName}")
    public DashboardStats dashboard(
    @PathVariable String studentName){

        return service.getDashboardStats(studentName);

    }

}