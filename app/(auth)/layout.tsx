import { ThemeToggler } from "@/components/ThemeToggler";
import { Toaster } from "@/components/ui/toaster";

const AuthLayout = ({children}: {children: React.ReactNode})=>{
    return (
        <div className="flex items-center justify-center w-full h-screen relative">
           <ThemeToggler className='absolute top-5 right-5'/>
          {children}
          <Toaster/>
        </div>
    )
}

export default AuthLayout;