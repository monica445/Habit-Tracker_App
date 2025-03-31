import { useState } from 'react';
import ProgressChart from './ProgressChart'; // Make sure to import your ProgressChart component
import '../css/HabitCard.css';

const HabitCard = ({ habit, onToggle, onDelete, bgColor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="habit-card" style={{ backgroundColor: bgColor }}>
      <div className="habit-header">
        <h3>{habit.name}</h3>
        <div className="habit-actions">
          <input
            type='checkbox'
            checked={habit.completedToday}
            onChange={() => onToggle(habit.id)}
            className='habit-checkbox'
          />
          <button onClick={() => setIsExpanded(!isExpanded)} className='details-btn'>
            {isExpanded ? 'Hide Details' : 'View Details'}
          </button>
          <button 
              onClick={() => onDelete(habit.id)} 
              className="btn delete-btn"
            >
              Delete
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="habit-details">
          <p className="description">
            {habit.description || 'No description provided'}
          </p>
          <div className="streak-info">
            <span>Target: {habit.target} days/week</span>
          </div>
          <ProgressChart progress={habit.streak} goal={habit.target} />
        </div>
      )}
    </div>
  );
};

export default HabitCard;