import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HabitCard from '../components/HabitCard';
import '../css/Dashboard.css';

const Dashboard = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  const colors = ['#f42c96', '#f7a621', '#2c89e9', '#23b03b', '#2feacd'];// Allowed colors

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem('habits')) || []
    setHabits(storedHabits)
    setLoading(false)
  }, [])

  const toggleHabit = (id) => {
    const updatedHabits = habits.map(habit => {
      if (habit.id === id) {
        const completedToday = !habit.completedToday
        return {
          ...habit,
          completedToday,
          streak: completedToday ? habit.streak + 1 : Math.max(0, habit.streak - 1),
          lastUpdated: new Date().toISOString()
        }
      }
      return habit
    })
    setHabits(updatedHabits)
    localStorage.setItem('habits', JSON.stringify(updatedHabits))
  }

  const deleteHabit = (id) => {
    if (window.confirm('Are you sure you want to delete this habit?')) {
      const updatedHabits = habits.filter(habit => habit.id !== id)
      setHabits(updatedHabits)
      localStorage.setItem('habits', JSON.stringify(updatedHabits))
    }
  }

  if (loading) return <div className="loading">Loading...</div>

  return (
    <div className="dashboard">
      <div className="page-header">
        <h1>Your Habits</h1>
      </div>
      
      {habits.length === 0 ? (
        <div className="empty-state">
          <p>You don't have any habits yet.</p>
          <Link to="/add-habit" className="btn">Create Your First Habit</Link>
        </div>
      ) : (
        <div className="habits-list">
          {habits.map((habit, index)  => (
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