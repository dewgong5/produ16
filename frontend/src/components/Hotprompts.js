import imgSrc from './hotprompts.png'
import './Hotprompts.css';

function Hotprompts() {
    return(
        <div className="text-container">
            <img src={imgSrc} alt="Image" className="header-long-text" />
            <img src={imgSrc} alt="Image" className="header-long-text" />
        </div>
    );
}

export default Hotprompts