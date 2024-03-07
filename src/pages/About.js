import {Component} from "react";
import Header from "../components/Header";
import TopSection from "../components/TopSection";
import background from "../assets/background2.png"
import Section from "../components/Section";

class About extends Component {
	render() {
		return (
			<div className={"about"}>
				<Header id={1}/>
				<TopSection background={background}/>
				<Section/>
			</div>
		);
	}
}

export default About;
