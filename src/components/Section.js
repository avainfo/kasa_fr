import "../style/Section.scss"
import icon from "../assets/down-icon.svg"
import CustomOption from "./CustomOption";

function actionSection(event) {
    // console.log(event.target.parentElement.parentElement);
    // console.log(event.target);
    // console.log(numberOfElements)
    // console.log(event.target.style.transform === "")
    let numberOfElements = event.target.parentElement.parentElement.children[1].innerHTML.split("<br>").length;
    if(event.target.style.rotate === "") {
        event.target.parentElement.parentElement.style.height = "calc(" + (numberOfElements * 3.5) + "vh" + " + 5vh + 40px)";
        event.target.parentElement.parentElement.children[1].style.height = "calc(" + (numberOfElements * 3.5) + "vh)";
        event.target.style.rotate = "180deg";
        console.log("TURNEDDDDDDD")
    } else {
        event.target.parentElement.parentElement.style.height = "calc(5vh + 20px)";
        event.target.parentElement.parentElement.children[1].style.height = "calc(5vh + 20px)";
        event.target.style.rotate = "";
    }
}

function Section({title}) {
    return (
        <div className={"section"}>
            <div>
                <div>{title}</div>
                <img src={icon ?? ""} alt="icon" onClick={event => actionSection(event)}/>
            </div>
            <CustomOption/>
        </div>
    );
}

export default Section;
