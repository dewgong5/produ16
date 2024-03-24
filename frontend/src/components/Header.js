import './Header.css';
import imageSrc from './logo2.jpg';
import imageSrc2 from './image 1.png';

import { Link } from 'react-router-dom';

function Header() {
    return (
      <div className="header">
        <Link to="/" id="home-link" className="header-link">
          <img src={imageSrc} alt="Image" className="header-image" />
        </Link>
        <Link to="/explore" className="header-link">
          <h1 className="horizontal-text">EXPLORE</h1>
        </Link>
        <Link to="/profile" className="header-link">
          <h1 className="horizontal-text">MY PROMPTS</h1>
        </Link>
        <Link to="/profile" className="header-link">
          <h1 className="horizontal-text">HI USER!</h1>
        </Link>
        <Link to="/profile">
          <img src={imageSrc2} alt="User Profile" className="header-image2" />
        </Link>
      </div>
    );
  }

export default Header