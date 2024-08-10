import { Outlet } from "react-router-dom"
import Header from "./module-10-08-24/module/Header"
import SideMenu from "./module-10-08-24/module/SideMenu"


function App() {

  return (
    <>
      <Header />
      <div id="page-body" className="flex gap-[50px]">
        <SideMenu />
        <div id="page-body" className="2xl:mt-[40px] xl:mt-[36px] lg:mt-[32px] md:mt-[30px] sm:mt-[27px] mt-[25px] gap-[20px] xl:px-[70px] px-[40px] md:py-[40px] py-[20px] ">
          <Outlet />
        </div>
      </div>
    </>
    
  )
}

export default App
