import "../style/Card.scss"

function Card({text}) {
	return (
		<div className={"cards"}>
			<div className={"overlay"}>
				<div>{text}</div>
			</div>
		</div>
	);
}

export default Card;
