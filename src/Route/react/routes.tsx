import { RouteObject } from "react-router-dom";
import Home from "@/pages/Home"
import Employee from "@/pages/Employee"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/employee",
    element: <Employee />,
  },
];

export default routes;
