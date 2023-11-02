import { createBrowserRouter } from "react-router-dom";
import Home from "../../features/home/home";
import Login from "../../features/login/login";
import PrivateRoute from "../auth/components/privateRoute";

export const appRouter = createBrowserRouter([
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home/>
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);