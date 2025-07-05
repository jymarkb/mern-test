import { RouteObject } from "react-router-dom";
import Home from "@/pages/Home";
import Employee from "@/pages/Employee/Employee";
import EmployeeForm from "@/pages/Employee/form/form";
import Login from "@/components/Auth/login";
import { AuthRoute } from "./authRoute";
import { Navigate } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/employee",
    element: (
        <Employee />
      // <AuthRoute>
      // </AuthRoute>
    ),
  },
  {
    path: "/create",
    element: (
        <EmployeeForm params="create" />
      // <AuthRoute>
      // </AuthRoute>
    ),
  },
  {
    path: "/edit/:id",
    element: (
        <EmployeeForm params="edit" />
      // <AuthRoute>
      // </AuthRoute>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default routes;
