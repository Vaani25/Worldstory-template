import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App, { AppChild } from "./App";
import NewsPage from "./components/newspage";
import FashionPage from "./components/fashionpage";
import TravelPage from "./components/travelpage";
import LifestylePage from "./components/lifestylepage";


import ReactDOM from "react-dom/client";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AppChild />
      },
      {
        path: "/newsapp",
        element: <NewsPage />,
      },
      {
        path: "/fashion",
        element: <FashionPage />,
      },
      {
        path: "/travel",
        element: <TravelPage />,
      },
      {
        path: "/life",
        element: <LifestylePage />,
      },
      
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider
      router={router}
    />
  </>
);