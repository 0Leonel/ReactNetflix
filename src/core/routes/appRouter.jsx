import { createBrowserRouter } from "react-router-dom";
import Home from "../../features/home/views/home";
import Login from "../../features/login/views/login";
import PrivateRoute from "../auth/components/privateRoute";
import PublicRoute  from "../auth/components/PublicRoute";
import { Fail404 } from "../components/404/fail404";
import { LayoutPublic } from "../../features/home/views/LayoutPublic";
import { AppSearch } from "../../features/home/views/search";

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
        path: "peliculas",
        element: <div className="text-center text-6xl">Peliculas</div>,
      },
      {
        path: "series",
        element: <div className="text-center text-6xl">Series</div>,
      },
      {
        path: "categorias",
        element:<div className="text-center text-6xl">Categorias</div>,
      },
      {
        path: "mi-espacio",
        element:<div className="text-center text-6xl">Mi espacio</div>,
      },
      {
        path: "configuracion",
        element:<div className="text-center text-6xl">Configuracion</div>,
      },
      {
        path:"descargas",
        element:<div className="text-center text-6xl">Descargas</div>,
      },
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
