import { Link } from 'react-router-dom';
import '../css/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="header">
        <h1>Build Better Habits</h1>
        <p>Track your progress and stay consistent with your daily habits</p>
        <Link to="/dashboard" className="cta-btn">Get Started</Link>
      </div>
      
      <div className="features">
        <div className="feature-card">
          <h3>Simple Tracking</h3>
          <p>Easily log your daily habits with one click</p>
        </div>
        <div className="feature-card">
          <h3>Visual Progress</h3>
          <p>See your streaks and completion rates</p>
        </div>
        <div className="feature-card">
          <h3>Stay Motivated</h3>
          <p>Build consistency with our tracking system</p>
        </div>
      </div>
    </div>
  );
};

export default Home;