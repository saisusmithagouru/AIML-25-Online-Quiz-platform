package com.quiz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quiz.entity.Result;

public interface ResultRepository extends JpaRepository<Result, Long>{

    List<Result> findAllByOrderByPercentageDesc();

    List<Result> findByStudentName(String studentName);

}