import starActive from "../assets/star-active.svg";
import starInactive from "../assets/star-inactive.svg";

function Stars({rating}) {

	return (
		<div className={"stars"}>
			{[...Array(rating)].map((e, i) => <img src={starActive ?? ""} key={i} alt={""}/>)}
			{[...Array(5 - rating)].map((e, i) => <img src={starInactive ?? ""} key={i} alt={""}/>)}
		</div>
	)
}

export default Stars;