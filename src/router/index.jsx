import {  createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layouts/Layout";
import Home from "../pages/Home";
import Search from "../pages/Search";
import NotFound from "../pages/NotFound";
import Create from "../pages/Create";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children : [
        {
            path : "",
            element : <Home/>
        },
        {
            path : "/search",
            element : <Search/>
        },
        {
          path : "/create",
          element : <Create/>
      },
        {
            path: "*",
            element:<NotFound/>
        }
      ]
    },
  ]);

  export default router;