import '../style/App.scss';
import Header from "./Header";
import TopSection from "./TopSection";
import Gallery from "./Gallery";
import background from "../assets/background.png"
import Footer from "./Footer";

function App() {
    return (
        <div className={"main"}>
            <Header/>
            <TopSection background={background} text={"Chez vous, partout et ailleurs"}/>
            <Gallery/>
            <Footer/>
        </div>
    );
}

export default App;
