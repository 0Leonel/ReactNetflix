import { createBrowserRouter } from "react-router-dom";
import Home from "../../features/home/home";
import LoginView from '../../features/login/login'
import PrivateRoute from "../auth/components/privateRoute";
import PublicRoute  from "../auth/components/PublicRoute";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginView />
      </PublicRoute>
    ),
  },
  // 404
  {
    path: "*",
    element: <div>No se encontro la pagina</div>,
  },
]);
