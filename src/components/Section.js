import "../style/Section.scss"
import icon from "../assets/down-icon.svg"
import CustomOption from "./CustomOption";

function actionSection(event) {
    if(event.target.style.rotate === "-180deg") {
        event.target.parentElement.parentElement.children[1].style.padding = "0";
        event.target.parentElement.parentElement.children[1].style.maxHeight = "0";
        event.target.style.rotate = "";
    } else {
        console.log(event.target.parentElement.parentElement.children[1]);
        event.target.parentElement.parentElement.children[1].style.padding = "10px 20px";
        event.target.parentElement.parentElement.children[1].style.maxHeight = "fit-content";
        event.target.style.rotate = "-180deg";
    }
}

function Section({title, content}) {
    return (
        <div className={"section"}>
            <div>
                <div>{title}</div>
                <img src={icon ?? ""} alt="icon" onClick={event => actionSection(event)}/>
            </div>
            <CustomOption content={content}/>
        </div>
    );
}

export default Section;
