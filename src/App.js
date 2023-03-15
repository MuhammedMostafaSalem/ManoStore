import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./Components/Utility/Footer/Footer";
import Navbar from "./Components/Utility/Navbar/Navbar";

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
        element: <div>Home Page</div>,
      },
      {
        path: "/products/:id",
        element: <div>Category Page</div>,
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
