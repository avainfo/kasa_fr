import '../style/App.scss';
import Header from "./Header";
import TopSection from "./TopSection";
import Gallery from "./Gallery";
import background from "../assets/background.png"

function App() {
    return (
        <div className={"main"}>
            <Header/>
            <TopSection background={background} text={"Chez vous, partout et ailleurs"}/>
            <Gallery/>
        </div>
    );
}

export default App;
