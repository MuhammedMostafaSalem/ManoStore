import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./Components/Utility/Footer/Footer";
import Navbar from "./Components/Utility/Navbar/Navbar";
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';

const Layout = () => {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/products/:id",
        element: <Products/>,
      },
      {
        path: "/product/:id",
        element: <div>Product Page</div>,
      },
    ],
  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
