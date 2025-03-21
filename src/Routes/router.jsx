import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home/Home";
import MenuLayout from "../pages/Menu/MenuLayout/MenuLayout";
import Contact from "../pages/Contact/Contact";
import Order from "../pages/OrderFood/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/our-menu',
          element: <MenuLayout></MenuLayout>
        }, 
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/contact-us',
          element: <Contact></Contact>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

export default router;