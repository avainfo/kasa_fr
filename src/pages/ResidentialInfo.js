import {Component} from "react";
import document from "../assets/logements.json"
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import "../style/ResidentialInfo.scss"
import Tag from "../components/Tag";
import Stars from "../components/Stars";
import SemiSection from "../components/SemiSection";
import Footer from "../components/Footer";

class ResidentialInfo extends Component {

	constructor(props) {
		super(props);
		this.id = window.location.pathname.split("/")[2]
		this.res = document[this.id];
		this.index = 0;
	}

	render() {
		return (
			<div className={"residentialInfo"}>
				<Header/>
				<Carousel img={this.res["pictures"]}/>
				<div className={"infos"}>
					<div className={"leftInfos"}>
						<h1 className={"title"}>{this.res["title"]}</h1>
						<h2 className={"loc"}>{this.res["location"]}</h2>
						<div className={"tags"}>
							{this.res["tags"].map((tag) => <Tag name={tag} key={this.index++}/>)}
						</div>
					</div>
					<div className={"rightInfos"}>
						<div className={"host"}>
							<p>{this.res["host"]["name"]}</p>
							<img src={this.res["host"]["picture"]} alt=""/>
						</div>
						<Stars rating={3}/>
					</div>
				</div>
				<div className={"sections"}>
					<SemiSection content={<div>{this.res["description"]}</div>} title={"Description"}/>
					<SemiSection content={this.res["equipments"].map((e) => <div key={this.index++}>{e}</div>)} title={"Équipements"}/>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default ResidentialInfo;
