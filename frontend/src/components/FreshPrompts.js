import Card from "./Card";
import imgSrc from './freshpromptslogo.png'
import Hotprompts from "./Hotprompts";
import Hot from "./Hot";

function FreshPrompts() {
    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue pellentesque enim nec ullamcorper. Quisque volutpat pretium libero, non viverra lacus posuere non. In quis diam non tortor vulputate cursus in eget massa. Ut lorem tellus, congue eget libero nec, ornare ornare nunc. Vestibulum eleifend, dui ut viverra lobortis. '
    return (
        <div class = "container">
            <Hotprompts/>
            <Hot/>
            <div className="dark-background"><img src={imgSrc} alt="Image" className="frshprmpts"/>
            </div>
            <Card title = "Harry Potter Spinoff?" description = {loremIpsum} user = "ADMIN" like = "25" comment = "20" shared = "30" saved = "11"/>
            <Card title = "New Game?" description = "So Fresh"/>
            <Card title = "Fresh 1" description = "So Fresh"/>
            <Card title = "Fresh 1" description = "So Fresh"/>
            <Card title = "Fresh 1" description = "So Fresh"/>
        </div>

    );

}

export default FreshPrompts;