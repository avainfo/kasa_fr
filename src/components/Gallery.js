import Card from "./Card";
import "../style/Gallery.scss"

function Gallery() {
    return (
        <div className={"gallery"}>
            <Card text={"Titre de la location"}/>
            <Card text={"Titre de la location"}/>
            <Card text={"Titre de la location"}/>
            <Card text={"Titre de la location"}/>
            <Card text={"Titre de la location"}/>
            <Card text={"Titre de la location"}/>
        </div>
    );
}

export default Gallery;
