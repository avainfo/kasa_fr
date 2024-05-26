import "../style/Carousel.scss"
import {useState} from "react";
import icon from "../assets/down-icon.svg";

function Carousel({img}) {

	const [index, setIndex] = useState(0);

	return (
		<div className="carousel">
			<img className="carousel-item" src={img[index]} alt=""/>
			{img.length > 1 ? (<>
				<img className="li icon" src={icon ?? ""} alt="icon" onClick={() => update(-1)}/>
				<img className="ri icon" src={icon ?? ""} alt="icon" onClick={() => update(1)}/>
				<p>{index + 1}/{img.length}</p>
			</>) : null}


		</div>
	);

	function update(side) {
		if(index + side >= 0 && index + side < img.length) {
			setIndex(index + side);
		} else {
			if(index + side >= img.length) {
				setIndex(0);
			} else if(index + side < 0) {
				setIndex(img.length - 1);
			}
		}
	}

}

export default Carousel;