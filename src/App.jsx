import {  RouterProvider } from 'react-router-dom';
import { appRouter } from "./core/routes/appRouter";
import RootProvider from "./core/providers/rootProvider";

const App = () => {
  return (
<<<<<<< HEAD
    <div>
      <h1>APP PARA PELIS</h1>
      <h2>Esto Funciona para el cliente</h2>
    </div>
  );
};
=======
>>>>>>> origin/QA

      <>
      <RootProvider>
        <RouterProvider router={appRouter}/>
      </RootProvider>
    </>
      
  )
}
export default App;