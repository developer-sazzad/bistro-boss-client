import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home/Home/Home";
import MenuLayout from "../pages/Menu/MenuLayout/MenuLayout";
import OurFood from "../pages/OurFood/OurFood";



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
          path: '/our-food',
          element: <OurFood></OurFood>
        }
      ]
    },
  ]);

export default router;