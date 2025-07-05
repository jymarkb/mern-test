import { RouteObject } from "react-router-dom";
import Home from "@/pages/Home"
import Employee from "@/pages/Employee/Employee"
import EmployeeForm from "@/pages/Employee/form/form"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/employee",
    element: <Employee />,
  },
  {
    path: "/create",
    element: <EmployeeForm params="create" />,
  },
  {
    path: "/edit/:id",
    element: <EmployeeForm params="edit" />,
  },
];

export default routes;
