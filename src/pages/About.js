import {Component} from "react";
import Header from "../components/Header";
import TopSection from "../components/TopSection";
import background from "../assets/background2.png"
import Section from "../components/Section";
import Footer from "../components/Footer";

class About extends Component {
    static loaded = false;

    render() {
        return (
            <div className={"about"} onLoad={() => resize()}>
                <Header id={1}/>
                <TopSection background={background}/>
                <Section title={"Fiabilité"}/>
                <Section title={"Respect"}/>
                <Section title={"Service"}/>
                <Section title={"Sécurité"}/>
                <div style={{height: "50px"}}/>
                <Footer/>
            </div>
        );
    }
}

function resize() {
    if(!About.loaded) {
        for(let element of document.getElementsByClassName("section")) {
            element.style.height = "calc(5vh + 20px)";
        }
    }

    About.loaded = true;
}

export default About;
