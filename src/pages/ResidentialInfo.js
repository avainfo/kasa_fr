import document from "../assets/logements.json"
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import "../style/ResidentialInfo.scss"
import Tag from "../components/Tag";
import Stars from "../components/Stars";
import SemiSection from "../components/SemiSection";
import Footer from "../components/Footer";
import {Navigate, useParams} from "react-router-dom";

function ResidentialInfo() {
	let {id} = useParams();
	let res = getElementById(id);
	let index = 0;

	if(res == null) {
		return <Navigate to={"/404"}/>;
	} else {
		return (<div className={"residentialInfo"}>
			<Header/>
			<Carousel img={res["pictures"]}/>
			<div className={"infos"}>
				<div className={"leftInfos"}>
					<h1 className={"title"}>{res["title"]}</h1>
					<h2 className={"loc"}>{res["location"]}</h2>
					<div className={"tags"}>
						{res["tags"].map((tag) => <Tag name={tag} key={index++}/>)}
					</div>
				</div>
				<div className={"rightInfos"}>
					<div className={"host"}>
						<p>{res["host"]["name"]}</p>
						<img src={res["host"]["picture"]} alt=""/>
					</div>
					<Stars rating={3}/>
				</div>
			</div>
			<div className={"sections"}>
				<SemiSection content={<div>{res["description"]}</div>} title={"Description"}/>
				<SemiSection content={res["equipments"].map((e) => <div key={index++}>{e}</div>)}
				             title={"Équipements"}/>
			</div>
			<Footer/>
		</div>);
	}


	function getElementById(id) {
		for(const element of document) {
			if(element.id === id) {
				return element;
			}
		}
		return null;
	}
}

export default ResidentialInfo;
