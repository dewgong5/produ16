import Card from "./components/Card";
import imgSrc from './components/hotprompts.png'

function FreshPrompts() {
    return (
        <div class = "container">
            <img src={imgSrc} alt="Image" className="header-long-text" />
            <Card title = "Fresh 1" description = "So Fresh"/>
            <Card title = "Fresh 1" description = "So Fresh"/>
            <Card title = "Fresh 1" description = "So Fresh"/>
            <Card title = "Fresh 1" description = "So Fresh"/>
            <Card title = "Fresh 1" description = "So Fresh"/>
        </div>

    );

}

export default FreshPrompts;