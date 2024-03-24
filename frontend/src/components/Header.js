import './Header.css';
import imageSrc from './logo2.jpg';
import imageSrc2 from './image 1.png';

function Header() {
    return (
      <div className="header">
        <img src={imageSrc} alt="Image" className="header-image" />

        <h1 className="horizontal-text">EXPLORE</h1>
        <h1 className="horizontal-text">MY PROMPTS</h1>
        <h1 className="horizontal-text">HI USER!</h1>
        <img src={imageSrc2} alt="Image" className="header-image2" />
      </div>
    );
  }

export default Header