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
    element: (
      <AuthRoute>
        <Login />
      </AuthRoute>
    ),
  },
  {
    path: "/employee",
    element: (
      <AuthRoute>
        <Employee />
      </AuthRoute>
    ),
  },
  {
    path: "/create",
    element: (
      <AuthRoute>
        <EmployeeForm params="create" />
      </AuthRoute>
    ),
  },
  {
    path: "/edit/:id",
    element: (
      <AuthRoute>
        <EmployeeForm params="edit" />
      </AuthRoute>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default routes;
