import "../style/Card.scss"

function Card({text, img}) {
	return (
		<div className={"cards"} style={{backgroundImage: `url(${img})`}}>
			<div className={"overlay"}>
				<div>{text}</div>
			</div>
		</div>
	);
}

export default Card;
