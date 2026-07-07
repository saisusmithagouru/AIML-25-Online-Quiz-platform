package com.quiz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.quiz.entity.Question;
import com.quiz.service.QuestionService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/questions")
@CrossOrigin(origins = "*")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    public QuestionService getQuestionService() {
		return questionService;
	}

	public void setQuestionService(QuestionService questionService) {
		this.questionService = questionService;
	}

	@PostMapping("/add")
	public Question addQuestion(@Valid @RequestBody Question question) {
	    return questionService.addQuestion(question);
	}

    @GetMapping("/all")
    public List<Question> getAllQuestions() {
        return questionService.getAllQuestions();
    }
    @GetMapping("/category/{category}")
    public List<Question> getQuestionsByCategory(@PathVariable String category) {
        return questionService.getQuestionsByCategory(category);
    }
    @PutMapping("/update/{id}")
    public Question updateQuestion(@PathVariable Long id,
                                   @Valid @RequestBody Question question) {
        return questionService.updateQuestion(id, question);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteQuestion(@PathVariable Long id) {

        questionService.deleteQuestion(id);

        return "Question deleted successfully";
    }
}