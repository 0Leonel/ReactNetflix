import {  RouterProvider } from 'react-router-dom';
import { appRouter } from "./core/routes/appRouter";
import RootProvider from "./core/providers/rootProvider";

const App = () => {
  return (
<<<<<<< HEAD
=======

>>>>>>> origin/UAT
      <>
      <RootProvider>
        <RouterProvider router={appRouter}/>
      </RootProvider>
    </>
      
  )
}
export default App;