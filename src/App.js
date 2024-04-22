import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import UnknownPage from "./pages/UnknownPage";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Home/>,
	},
	{
		path: "about",
		element: <About/>,
	},
	{
		path: "*",
		element: <UnknownPage/>
	}
]);


function App() {
	return (
		<RouterProvider router={router}/>
	);
}

export default App;
