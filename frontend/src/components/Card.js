import './Card.css';
import userPic from './image 1.png'
import harry from './harry.jpg'
import heart from './image 7.png'
import com from './image 8.png'
import shar from './image 9.png'
import sav from './image 28.png'




function Card({title, description, user, like, comment, shared, saved}) {
    return (
      <div className="card">
        <div className="card-content">
        <div className="card-user-container">
          <img src={userPic} alt="Image" className="imagecard"/>
          <h5 className="card-user">{user}</h5>
          <h5 className="resultBubble">TOPIC</h5>
          <h5 className="hours">3 HRS AGO</h5>
          <h5 className="resultBubble2">NEW TOPIC</h5>
          </div>
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <img src={harry} alt="Image" className="harryimg"/>
        <div class="newline"></div>
        <h5 className="resultBubble3"><img src={heart} alt="Image" className="heart"></img>{like}</h5>
        <h5 className="resultBubble4"><img src={com} alt="Image" className="comment"></img>{comment}</h5>
        <h5 className="resultBubble5"><img src={shar} alt="Image" className="shared"></img>{shared}</h5>
        <h5 className="resultBubble6"><img src={sav} alt="Image" className="saved"></img>{saved}</h5>
        </div>
      </div>
    );
  }

export default Card;
