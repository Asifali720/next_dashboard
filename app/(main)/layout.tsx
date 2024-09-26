import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar";



const MainLayout = ({children}: {children: React.ReactNode})=>{
    return (
        <>
         <Navbar/>
      <div className="flex">
        <div className="hidden md:block h-screen w-[20%] sticky left-0 top-14">
          <Sidebar/>
        </div>
        <div className="w-full md:w-[80%] p-5">
        {children}
        </div>
      </div>
        </>
    )
}

export default MainLayout;