import React, { useState, useEffect } from "react";

const RandomNumberGame = () => {
  const [num1, setNum1] = useState(generateRandomNumber(100));
  const [num2, setNum2] = useState(generateRandomNumber(20));
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);
  const [questionCount, setQuestionCount] = useState(0);  // Track number of questions answered
  const [startTime, setStartTime] = useState(null);        // Track start time
  const [endTime, setEndTime] = useState(null);            // Track end time
  
  // Generate a random number less than the specified limit
  function generateRandomNumber(limit) {
    return Math.floor(Math.random() * limit);
  }

  // Handle input change for the answer
  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  // Automatically check if the answer is correct when the user inputs a value
  useEffect(() => {
    if (questionCount === 0) {
      setStartTime(Date.now()); // Start timer when the game begins
    }

    if (answer === "") {
      setResult(null);
      return;
    }

    const parsedAnswer = parseInt(answer);

    if (parsedAnswer === num1 - num2) {
      setResult("Correct!");
      setQuestionCount((prev) => prev + 1); // Increment question count
      setAnswer(""); // Clear the answer input
      
      if (questionCount + 1 === 5) {
        setEndTime(Date.now()); // End timer after the 5th question
      } else {
        setTimeout(() => {
          newRound(); // Proceed to the next round
        }, 100); // Wait a second before going to the next round
      }
    } else {
      setResult("Incorrect! Try again.");
    }
  }, [answer, questionCount]);

  // Start a new round
  const newRound = () => {
    setNum1(generateRandomNumber(100));
    setNum2(generateRandomNumber(20));
    setAnswer("");
    setResult(null);
  };

  // Calculate the total time taken
  const getTotalTime = () => {
    if (endTime !== null && startTime !== null) {
      const timeTaken = (endTime - startTime) / 1000; // Time in seconds
      return `Total time: ${timeTaken} seconds`;
    }
    return null;
  };

  return (
    <div>
      <h1>Random Number Subtraction Game</h1>

      {/* Display the question only if the game is ongoing */}
      {questionCount < 5 ? (
        <>
          <p>What is {num1} - {num2}?</p>
          <div>
            <input 
              type="number" 
              value={answer} 
              onChange={handleAnswerChange} 
              placeholder="Enter your answer"
            />
          </div>
          {result && <p>{result}</p>}
        </>
      ) : (
        // Display result after 5 questions
        <div>
          <p>Game Over!</p>
          {getTotalTime() && <p>{getTotalTime()}</p>}
        </div>
      )}

      {/* Optional: Button to restart the game */}
      {questionCount === 5 && <button onClick={() => window.location.reload()}>Play Again</button>}
    </div>
  );
};

export default RandomNumberGame;
