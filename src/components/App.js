import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Home/>,
	},
	{
		path: "about",
		element: <About/>,
	},
	//TODO: 404 Page
	{
		path: "*",
		element: <div/>
	}
]);


function App() {
	return (
		<RouterProvider router={router}/>
	);
}

export default App;
