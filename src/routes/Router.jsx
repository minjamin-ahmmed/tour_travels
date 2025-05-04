import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import State from "../Pages/UseState/State";
import Practice from "../Pages/Practice/Practice";
import Faraway from "../Pages/FarAway/Faraway";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <State />,
      },

      {
        path: "/practice",
        element: <Practice />,
      },

      {
        path: "/faraway",
        element: <Faraway />,
      },
    ],
  },
]);

export default router;
