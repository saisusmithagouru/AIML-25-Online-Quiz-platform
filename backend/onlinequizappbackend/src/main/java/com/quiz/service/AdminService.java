package com.quiz.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quiz.dto.AdminDashboardStats;
import com.quiz.repository.QuestionRepository;
import com.quiz.repository.ResultRepository;
import com.quiz.repository.UserRepository;

@Service
public class AdminService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private ResultRepository resultRepository;

    public AdminDashboardStats getDashboardStats(){

        AdminDashboardStats stats=new AdminDashboardStats();

        stats.setTotalStudents(userRepository.count());

        stats.setTotalQuestions(questionRepository.count());

        stats.setTotalQuizAttempts(resultRepository.count());

        stats.setTotalCategories(questionRepository.countCategories());

        return stats;

    }

}