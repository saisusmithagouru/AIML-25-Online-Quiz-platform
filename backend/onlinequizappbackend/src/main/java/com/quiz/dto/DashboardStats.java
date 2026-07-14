package com.quiz.dto;

public class DashboardStats {

    private int quizzesTaken;
    private int highestScore;
    private int averageScore;
    private int rank;

    public DashboardStats() {}

    public int getQuizzesTaken() {
        return quizzesTaken;
    }

    public void setQuizzesTaken(int quizzesTaken) {
        this.quizzesTaken = quizzesTaken;
    }

    public int getHighestScore() {
        return highestScore;
    }

    public void setHighestScore(int highestScore) {
        this.highestScore = highestScore;
    }

    public int getAverageScore() {
        return averageScore;
    }

    public void setAverageScore(int averageScore) {
        this.averageScore = averageScore;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

}