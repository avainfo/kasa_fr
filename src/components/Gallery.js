import Card from "./Card";
import "../style/Gallery.scss";
import document from "../assets/logements.json"

function Gallery() {

	let cards = [];

	for(let documentKey of document) {
		console.log(documentKey);
		cards.push(<Card text={documentKey["title"]} img={documentKey["cover"]}/>)
	}

	return (
		<div className={"gallery"}>
			{cards}
		</div>
	);
}

export default Gallery;
