import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import UnknownPage from "./pages/UnknownPage";
import ResidentialInfo from "./pages/ResidentialInfo";

const router = (<BrowserRouter>
	<Routes>
		<Route index path={"/"} element={<Home/>}/>
		<Route path={"/info/:id"} element={<ResidentialInfo id={0}/>}/>
		<Route path={"/about"} element={<About/>}/>
		<Route path={"*"} element={<UnknownPage/>}/>
	</Routes>
</BrowserRouter>);


function App() {
	return (router);
}

export default App;
