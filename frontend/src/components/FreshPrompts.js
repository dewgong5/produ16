import Card from "./Card";
import imgSrc from './freshpromptslogo.png'
import Hotprompts from "./Hotprompts";
import Hot from "./Hot";

function FreshPrompts() {
    const loremIpsum = 'I am currently making a skit about a Harry Potter movie involving Harry Potter himself marrying Hermione instead of Ron. Thoughts?'
    
    return (
        <div class = "container">
            <Hotprompts/>
            <Hot/>
            <div className="dark-background"><img src={imgSrc} alt="Image" className="frshprmpts"/>
            </div>
            <Card topic = "FANTASY" title = "Harry Potter Spinoff?" description = {loremIpsum} user = "USER_1" like = "25" comment = "20" shared = "30" saved = "11"/>
            <Card topic = "GAMING" title = "New Game?" user = "BIZBUZ" description = "I'm making an indie gane about dragons and wizards, would love to see some ideas (think of it as a cool social project to make a game)"/>
            <Card topic = "FANTASY" title = "Hackathon Idea?"  user = "BIZBUZ" description = "Would love to "/>
            <Card topic = "GAMING" title = "Fresh 1"  user = "BIZBUZ" description = "So Fresh"/>
            <Card topic = "GAMING" title = "Fresh 1"  user = "BIZBUZ" description = "So Fresh"/>
        </div>

    );
}

export default FreshPrompts;