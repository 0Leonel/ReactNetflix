import { createBrowserRouter } from "react-router-dom";
import Home from "../../features/home/views/home";
import Login from "../../features/login/views/login";
import PrivateRoute from "../auth/components/privateRoute";
import PublicRoute  from "../auth/components/PublicRoute";
import { Fail404 } from "../components/404/fail404";
import { LayoutPublic } from "../../features/home/views/LayoutPublic";
import { AppSearch } from "../../features/home/views/search";
import { AppSpinner } from "../components/appSpinner/appSpinner";
import { Categorias } from "../components/Categorias/Categorias";
import { Series } from "../components/Series/Series";
import { Peliculas } from "../components/Peliculas/Peliculas";
import { MiEspacio } from "../components/MiEspacio/MiEspacio";
import { Configuracion } from "../components/Configuracion/Configuracion";
import { Descargas } from "../components/Descargas/Descargas";
import { Detalles } from "../components/Details/detalles";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
         <LayoutPublic/>
      </PrivateRoute>),
    
    children: [
      { 
        index: true,
         element: <Home /> 
      },{
        path:"search",
        element: <AppSearch/>
      },
      {
        path: "/peliculas",
        element: <Peliculas/>,
      },
      {
        path: "/series",
        element: <Series/>,
      },
      {
        path: "categorias",
        element:<Categorias/>,
      },
      {
        path: "mi-espacio",
        element:<MiEspacio/>,
      },
      {
        path: "configuracion",
        element:<Configuracion/>,
      },
      {
        path:"descargas",
        element:<Descargas/>,
      },
      {
        path: "/:detalles/:id",
        element: <Detalles/>,
      }
    ]
    },
  {
    path: "/login",
    element: (
      <PublicRoute>
        
        <Login />
      </PublicRoute>
    ),
  },
  // 404
  {
    path: "*",
    element: <Fail404/>,
  },
  
]);
