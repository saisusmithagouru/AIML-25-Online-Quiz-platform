import React, { useState, useEffect } from "react";

const Timer = ({ duration = 300, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onTimeUp) {
        onTimeUp();
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div
      style={{
        padding: "10px 20px",
        backgroundColor: "#f8f9fa",
        border: "2px solid #007bff",
        borderRadius: "8px",
        display: "inline-block",
        fontWeight: "bold",
        fontSize: "18px",
        color: timeLeft <= 30 ? "red" : "#007bff",
      }}
    >
      ⏳ Time Left: {minutes}:{seconds.toString().padStart(2, "0")}
    </div>
  );
};

export default Timer;