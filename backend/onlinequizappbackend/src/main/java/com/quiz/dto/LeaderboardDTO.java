package com.quiz.dto;

public class LeaderboardDTO {

    private String studentName;
    private int highestScore;
    private int quizzesTaken;

    public LeaderboardDTO() {
    }

    public LeaderboardDTO(String studentName, int highestScore, int quizzesTaken) {
        this.studentName = studentName;
        this.highestScore = highestScore;
        this.quizzesTaken = quizzesTaken;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public int getHighestScore() {
        return highestScore;
    }

    public void setHighestScore(int highestScore) {
        this.highestScore = highestScore;
    }

    public int getQuizzesTaken() {
        return quizzesTaken;
    }

    public void setQuizzesTaken(int quizzesTaken) {
        this.quizzesTaken = quizzesTaken;
    }
}