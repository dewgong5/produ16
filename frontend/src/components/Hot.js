import imgSrc from './hot.png'
import imgSrc2 from './husband.png'

import './Hot.css';

function Hot() {
    return(
        <div className="hot-container">
            <img src={imgSrc} alt="Image" className="hoto" />
            <img src={imgSrc} alt="Image" className="hoto" />
            <img src={imgSrc2} alt="Image" className="hoto" />
            <img src={imgSrc} alt="Image" className="hot1" />

        </div>
    );
}

export default Hot