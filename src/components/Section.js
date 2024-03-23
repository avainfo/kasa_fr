import "../style/Section.scss"
import icon from "../assets/down-icon.svg"
import CustomOption from "./CustomOption";

function Section({title}) {
    return (
        <div className={"section"}>
            <div>
                <div>{title}</div>
                <img src={icon ?? ""} alt="icon"/>
            </div>
            <CustomOption/>
        </div>
    );
}

export default Section;
