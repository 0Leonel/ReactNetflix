import { AppNavbar } from '../../../core/components/navbar/app_navbar'
import { Outlet } from 'react-router-dom'
import { AppFooter } from '../../../core/components/footer/app_footer'
import { SearchProvider } from '../context/SearchProvider'

export const LayoutPublic = () => {


  return (
    <div className="bg-[#2B3337] ">
      <SearchProvider>
        <AppNavbar/>
        <div className="lg:ml-12">
        <Outlet/>
        </div>
        <AppFooter/>
      </SearchProvider>
    </div>
  )
}
