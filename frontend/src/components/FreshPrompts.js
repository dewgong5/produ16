import Card from "./Card";
import imgSrc from './hotprompts.png'
import Hotprompts from "./Hotprompts";
import Hot from "./Hot";

function FreshPrompts() {
    return (
        <div class = "container">
            <Hotprompts/>
            <Hot/>
            
            <Card title = "Fresh 1" description = "So Fresh"/>
            <Card title = "Fresh 1" description = "So Fresh"/>
            <Card title = "Fresh 1" description = "So Fresh"/>
            <Card title = "Fresh 1" description = "So Fresh"/>
            <Card title = "Fresh 1" description = "So Fresh"/>
        </div>

    );

}

export default FreshPrompts;