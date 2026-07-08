package com.quiz.service;

import java.util.List;
import com.quiz.entity.Question;

public interface QuestionService {

    Question addQuestion(Question question);

    List<Question> getAllQuestions();
    List<Question> getQuestionsByCategory(String category);
    Question updateQuestion(Long id, Question question);
    void deleteQuestion(Long id);

}