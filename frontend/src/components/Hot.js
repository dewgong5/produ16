import imgSrc from './hot.png'
import './Hot.css';

function Hot() {
    return(
        <div className="hot-container">
            <img src={imgSrc} alt="Image" className="hoto" />
            <img src={imgSrc} alt="Image" className="hoto" />
            <img src={imgSrc} alt="Image" className="hoto" />
            <img src={imgSrc} alt="Image" className="hot1" />

        </div>
    );
}

export default Hot