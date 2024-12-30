import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Home";
import Login from "./components/Login";
import AboutPage from "./AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  },
]);

function App() {
 return (
    <div className="App">
      <RouterProvider router={router} />
   </div>
 )
}

export default App;
