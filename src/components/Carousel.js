import "../style/Carousel.scss"
import {useState} from "react";
import icon from "../assets/down-icon.svg";

function Carousel({img}) {

	const [index, setIndex] = useState(0);

	return (
		<div className="carousel">
			<img className="carousel-item" src={img[index]} alt=""/>
			<img className="li icon" src={icon ?? ""} alt="icon" onClick={() => update(-1)}/>
			<img className="ri icon" src={icon ?? ""} alt="icon" onClick={() => update(1)}/>
			<p>{index + 1}/{img.length}</p>
		</div>
	);

	function update(side) {
		if(index + side >= 0 && index + side < img.length) {
			setIndex(index + side);
		}
	}

}

export default Carousel;