import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import HabitForm from '../components/HabitForm';
import '../css/AddHabit.css';

const AddHabit = () => {
  const navigate = useNavigate()
  const [habits, setHabits] = useState(
    JSON.parse(localStorage.getItem('habits')) || []
  )

  const handleSubmit = (newHabit) => {
    const habitWithId = {
      ...newHabit,
      id: Date.now().toString(),
      streak: 0,
      completedToday: false,
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    }
    
    const updatedHabits = [...habits, habitWithId]
    setHabits(updatedHabits)
    localStorage.setItem('habits', JSON.stringify(updatedHabits))
    navigate('/dashboard')
  }

  return (
    <div className="add-habit-page">
      <button onClick={() => navigate('/dashboard')} className="back-btn">
        ← Back to Dashboard
      </button>
      
      <h1>Add New Habit</h1>
      <HabitForm 
        onSubmit={handleSubmit}
        onCancel={() => navigate('/dashboard')}
      />
    </div>
  );
};

export default AddHabit;