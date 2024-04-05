import {Component} from "react";
import '../style/pages/App.scss';
import Header from "../components/Header";
import TopSection from "../components/TopSection";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import background from "../assets/background.png"

class Home extends Component {
	render() {
		return (
			<div className={"main"}>
				<Header id={0}/>
				<TopSection background={background} text={"Chez vous, partout et ailleurs"}/>
				<Gallery/>
				<Footer/>
			</div>
		);
	}
}

export default Home;
