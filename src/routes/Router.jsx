import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import State from "../Pages/UseState/State";
import Practice from "../Pages/Practice/Practice";
import Faraway from "../Pages/FarAway/Faraway";
import Flashcard from "../Pages/FlashCard/Flashcard";
import TabSlider from "../Pages/TabSlider/TabSlider";

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
      {
        path: "/flashcard",
        element: <Flashcard />,
      },
      {
        path: "/slider-tab",
        element: <TabSlider />,
      },
    ],
  },
]);

export default router;
