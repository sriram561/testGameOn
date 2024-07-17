// Statistics.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Statistics.css'; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = () => {
  const location = useLocation();
  const { scores } = location.state || { scores: {} };

  const gameData = {
    labels: ['Tic Tac Toe', 'Bricks Mania', '2048 Game', 'Sliding Puzzle'],
    datasets: [
      {
        label: 'Scores',
        data: [
          scores['tic-tac-toe'] || 0,
          scores['bricks-mania'] || 0,
          scores['2048-game'] || 0,
          scores['slidding-puzzle'] || 0,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const sampleData = {
    labels: ['Questions Attempted', 'Correct Answers', 'Wrong Answers'],
    datasets: [
      {
        label: 'Quiz Data',
        data: [5, 5, 0], // Example: 10 questions attempted, 5 correct answers, 5 wrong answers
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)', // Color for Questions Attempted
          'rgba(153, 102, 255, 0.2)', // Color for Correct Answers
          'rgba(255, 99, 132, 0.2)', // Color for Wrong Answers
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  

  return (
    <div className="statistics-container">
      <h2>Game Statistics</h2>
      <div className="chart-container">
        <Bar data={gameData} />
      </div>
      <h2>Quizz Data</h2>
      <div className="chart-container">
        <Bar data={sampleData} />
      </div>

    </div>
  );
};

export default Statistics;
