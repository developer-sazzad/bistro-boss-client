import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home/Home/Home";
import MenuLayout from "../pages/Menu/MenuLayout/MenuLayout";



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
          path: '/menu',
          element: <MenuLayout></MenuLayout>
        }
      ]
    },
  ]);

export default router;