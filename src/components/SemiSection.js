import "../style/SemiSection.scss";
import icon from "../assets/down-icon.svg";

function actionSection(event) {
	if(event.target.style.rotate === "180deg") {
		event.target.style.rotate = "";
		event.target.parentElement.parentElement.children[1].style.transform = "scaleY(0)";
		event.target.parentElement.parentElement.children[1].style.padding = "0 20px";
		event.target.parentElement.parentElement.children[1].style.height = "0";
		event.target.parentElement.parentElement.style.maxHeight = "5vh";
	} else {
		event.target.style.rotate = "180deg";
		event.target.parentElement.parentElement.children[1].style.transform = "scaleY(1)";
		event.target.parentElement.parentElement.children[1].style.padding = "15px 20px";
		event.target.parentElement.parentElement.children[1].style.height = "auto";
		event.target.parentElement.parentElement.style.maxHeight = "100%";
	}
}

function SemiSection({content, title}) {
	return (
		<div className={"semi-section-container"}>
			<div className={"semi-section"}>
				<h3>{title}</h3>
				<img src={icon ?? ""} alt="" onClick={(e) => actionSection(e)}/>
			</div>
			<div className={"content"}>{content}</div>
		</div>
	);
}

export default SemiSection;