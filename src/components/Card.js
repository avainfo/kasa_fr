import "../style/Card.scss"
import {Link} from "react-router-dom";

function Card({text, img, id}) {
	return (
		<Link className={"cards"} style={{backgroundImage: `url(${img})`, textDecoration: "none"}} to={
			{
				pathname: "info/" + id
			}
		}>
			<div className={"overlay"}>
				<div>{text}</div>
			</div>
		</Link>
	);
}

export default Card;
