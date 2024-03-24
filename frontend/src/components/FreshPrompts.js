import Card from "./Card";
import imgSrc from './hotprompts.png'
import Hotprompts from "./Hotprompts";

function FreshPrompts() {
    return (
        <div class = "container">
            <Hotprompts/>
            <Card title = "Fresh 1" description = "So Fresh"/>
            <Card title = "Fresh 1" description = "So Fresh"/>
            <Card title = "Fresh 1" description = "So Fresh"/>
            <Card title = "Fresh 1" description = "So Fresh"/>
            <Card title = "Fresh 1" description = "So Fresh"/>
        </div>

    );

}

export default FreshPrompts;