import Card from "./Card";
import "../style/Gallery.scss";
import document from "../assets/logements.json"

function Gallery() {
	let index = 0;

	return (
		<div className={"gallery"}>
			{
				document.map((documentKey) => (
					<Card text={documentKey["title"]} img={documentKey["cover"]} key={index++} id={documentKey["id"]}/>
				))
			}
		</div>
	);
}

export default Gallery;
