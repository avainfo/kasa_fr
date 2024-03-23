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
