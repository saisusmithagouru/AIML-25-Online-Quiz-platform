package com.quiz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.quiz.dto.AdminDashboardStats;
import com.quiz.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins="*")
public class AdminController {

    @Autowired
    private AdminService service;

    @GetMapping("/dashboard")
    public AdminDashboardStats dashboard(){

        return service.getDashboardStats();

    }

}