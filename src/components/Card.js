import "../style/Card.scss"
import {Link} from "react-router-dom";

function Card({text, img, id}) {
	return (
		<Link className={"cards"} style={{backgroundImage: `url(${img})`}} to={
			{
				pathname: "info/" + id,
				search: "?sort=name",
				hash: "#the-hash",
				state: { fromDashboard: true }

			}
		}>
			<div className={"overlay"}>
				<div>{text}</div>
			</div>
		</Link>
	);
}

export default Card;
