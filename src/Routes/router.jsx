import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home/Home/Home";
import MenuLayout from "../pages/Menu/MenuLayout/MenuLayout";
import Contact from "../pages/Contact/Contact";
import Order from "../pages/OrderFood/Order";



const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
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
        }
      ]
    },
  ]);

export default router;