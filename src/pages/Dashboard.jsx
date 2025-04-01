import { useState } from 'react';
import { Link } from 'react-router-dom';
import HabitCard from '../components/HabitCard';
import '../css/Dashboard.css';

const Dashboard = () => {
  const [habits, setHabits] = useState(() => {
    const stored = localStorage.getItem('habits');
    try {
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error parsing habits from localStorage:', error);
      return [];
    }
  });

  const colors = ['#f7a621', '#2c89e9', '#23b03b', '#2feacd'];

  const toggleHabit = (id) => {
    const today = new Date().toISOString().split('T')[0];
    
    setHabits(prevHabits => {
      const updated = prevHabits.map(habit => {
        if (habit.id !== id) return habit;
        
        const wasCompletedToday = habit.lastCompleted === today;
        const newCompletedToday = !habit.completedToday;
        
        return {
          ...habit,
          completedToday: newCompletedToday,
          completedThisWeek: newCompletedToday
            ? (wasCompletedToday ? habit.completedThisWeek : habit.completedThisWeek + 1)
            : (wasCompletedToday ? habit.completedThisWeek - 1 : habit.completedThisWeek),
          lastCompleted: newCompletedToday ? today : null
        };
      });
      
      localStorage.setItem('habits', JSON.stringify(updated));
      return updated;
    });
  };

  const deleteHabit = (id) => {
    //const habitToDelete = habits.find(h => h.id === id);
    //if (window.confirm(`Delete the habit "${habitToDelete?.name}"?`)) {
      setHabits(prev => {
        const updated = prev.filter(h => h.id !== id);
        localStorage.setItem('habits', JSON.stringify(updated));
        return updated;
      });
    
  };

  return (
    <div className="dashboard">

      <div className="page-header">
        <h1>Your Habits</h1>
      </div>
      
      {habits.length === 0 ? (
        <div className="empty-list">
          <p>No habits yet.</p>
          <Link to="/add-habit" className="btn" aria-label="Create a new habit">
            Create Habit
          </Link>
        </div>
      ) : (
        <div className="habits-list">
          {habits.map((habit, index) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              onToggle={toggleHabit}
              onDelete={deleteHabit}
              bgColor={colors[index % colors.length]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
