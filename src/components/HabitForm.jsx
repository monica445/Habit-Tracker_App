import { useState } from 'react';
import '../css/HabitForm.css';

const HabitForm = ({ onSubmit, onCancel }) => {
  const [habit, setHabit] = useState({ name: '', description: '', target: 7 });

  const handleInputChange = (e) => {
    setHabit({ ...habit, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(habit); }} className="habit-form">
      <div className="form-group">
        <label>Habit Name</label>
        <input type="text" name="name" value={habit.name} onChange={handleInputChange} required placeholder="e.g., Drink water" />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea name="description" value={habit.description} onChange={handleInputChange} placeholder="Add details..." rows="3" />
      </div>

      <div className="form-group">
        <label>Target Days per Week</label>
        <select name="target" value={habit.target} onChange={handleInputChange} required>
          {[...Array(7)].map((_, i) => <option key={i} value={i + 1}>{i + 1} day{i ? 's' : ''}</option>)}
        </select>
      </div>

      <div className="form-actions">
        <button type="button" onClick={onCancel} className="btn cancel-btn">Cancel</button>
        <button type="submit" className="btn submit-btn">Create Habit</button>
      </div>
    </form>
  );
};

export default HabitForm;
