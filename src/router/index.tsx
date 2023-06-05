import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "@/pages/home";
import My from "@/pages/my";
import App from "@/App";
import Ranking from "@/pages/ranking";
import MyMusic from "@/pages/myMusic";
import Play from "@/pages/play";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        loader: () => {
          return redirect("home");
        },
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "my",
        element: <My />,
      },
      {
        path: "ranking",
        element: <Ranking />,
      },
      {
        path: "myMusic",
        element: <MyMusic />,
      },
    ],
  },
  {
    path: "/play",
    element: <Play />,
  },
]);

export default router;
