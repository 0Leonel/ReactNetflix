import { useEffect } from 'react';
import { AppNavbar } from '../../../core/components/navbar/app_navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { AppFooter } from '../../../core/components/footer/app_footer';
import { SearchProvider } from '../context/SearchProvider';

export const LayoutPublic = () => {
  const location = useLocation();

  useEffect(() => {
    // Esta función se ejecutará cada vez que la ubicación (ruta) cambie
    window.scrollTo(0, 0);
  }, [location.pathname]); // Asegúrate de que se ejecute solo cuando cambie la ruta

  return (
    <div className="bg-[#2B3337]">
      <SearchProvider>
        <AppNavbar />
        <div className="lg:ml-12">
          <Outlet />
        </div>
        <AppFooter />
      </SearchProvider>
    </div>
  );
};
