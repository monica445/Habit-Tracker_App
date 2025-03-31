import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';
//useLocation is a hook
const Navbar = () => {
  const location = useLocation() 
  //useLocation returns the current location obj from router. it consists url path, ...
  
  if (location.pathname === '/') return null
  //this navbar component will return null in "/" path name (Home page)

  return (
    <nav className="navbar">
      <h1>Habit Tracker</h1>
      <div className="nav-links">
        <Link 
          to="/dashboard" 
          className={`nav-link ${location.pathname.includes('dashboard') ? 'active' : ''}`}
        > Dashboard
        </Link>
        <Link 
          to="/add-habit" 
          className={`nav-link ${location.pathname.includes('add-habit') ? 'active' : ''}`}
        > Add Habit
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;