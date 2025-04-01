import '../css/ProgressChart.css';

const ProgressChart = ({ progress, goal }) => {
  const percentage = Math.min(Math.round((progress / goal) * 100), 100);
  
  return (
    <div className="progress-chart">
      <div className="progress-labels">
        <span>Weekly Progress: {progress}/{goal}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressChart;