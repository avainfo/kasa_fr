import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import UnknownPage from "./pages/UnknownPage";
import ResidentialInfo from "./pages/ResidentialInfo";


const router = createBrowserRouter([{
	path: "/", element: <Home/>,
}, {
	path: "/info/:id", element: <ResidentialInfo id={0}/>,
}, {
	path: "/about", element: <About/>,
}, {
	path: "*", element: <UnknownPage/>
}]);

const router2 = (<BrowserRouter>
	<Routes>
		<Route index path={"/"} element={<Home/>}/>
		<Route path={"/info/:state"} element={<ResidentialInfo id={0}/>}/>
		<Route path={"/about"} element={<About/>}/>
		<Route path={"*"} element={<UnknownPage/>}/>
	</Routes>
</BrowserRouter>);


function App() {
	return (router2);
}

export default App;
