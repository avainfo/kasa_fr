import {BrowserRouter, Route, Routes} from "react-router-dom";
import DHome from "../pages/DHome";


function App() {
    return (
        <div className={"main"}>
            <Header/>
            <TopSection background={background} text={"Chez vous, partout et ailleurs"}/>
            <Gallery/>
            <Footer/>
        </div>
    );
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DHome/>}>
					<Route index element={<DHome/>}/>
					<Route path="*" element={
						//TODO: 404 Page
						<></>
					}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
