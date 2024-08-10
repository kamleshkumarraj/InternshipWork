import { Outlet } from "react-router-dom"
import Header from "./module-10-08-24/module/Header"
import SideMenu from "./module-10-08-24/module/SideMenu"


function App() {

  return (
    <>
    <div id="main-page" className="bg-[#F6F6F6]">
      <Header />
      <div id="page-body" className="flex 2xl:gap-[50px] ">
        <SideMenu />
        <div id="page-body" className="2xl:mt-[40px] xl:mt-[36px] lg:mt-[32px] md:mt-[30px] sm:mt-[27px] mt-[25px] gap-[20px] xl:px-[30px] 2xl:px-[70px] px-[20px] py-[20px] w-full">
          <Outlet />
        </div>
        </div>
      </div>
    </>
    
  )
}

export default App
