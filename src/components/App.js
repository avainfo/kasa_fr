import '../style/App.scss';
import Header from "./Header";
import TopSection from "./TopSection";
import background from "../assets/background.png"

function App() {
    return (
        <div className={"main"}>
            <Header/>
            <TopSection background={background} text={"Chez vous, partout et ailleurs"}/>
        </div>
    );
}

export default App;
