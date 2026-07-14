package com.quiz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.quiz.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long>{

    List<Question> findByCategory(String category);

    @Query("SELECT COUNT(DISTINCT q.category) FROM Question q")
    long countCategories();

}