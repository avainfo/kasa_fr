import "../style/SemiSection.scss";
import icon from "../assets/down-icon.svg";
import CustomOption from "./CustomOption";

function actionSection(event) {
	if(event.target.style.rotate === "-180deg") {
		event.target.style.rotate = "";
		event.target.parentElement.children[2].style.transform = "scaleY(0)";
	} else {
		event.target.style.rotate = "-180deg";
		event.target.parentElement.children[2].style.transform = "scaleY(1)";
	}
}

function SemiSection({content, title}) {
	return (
		<div className={"semi-section"}>
			<h3>{title}</h3>
			<img src={icon ?? ""} alt="" onClick={(e) => actionSection(e)}/>
			<div className={"content"}>{content}</div>
		</div>
	);
}

export default SemiSection;