import { Outlet } from "react-router-dom"
import logo from "../assets/logo.svg"

export function AuthLayout(){
    return(
        <div className="h-screen w-screen flex items-center justify-center bg-gray-400">
            <main className="bg-gray-500 flex items-center justify-center rounded-md flex-col p-8 md:min-w-[456px]">
                <img src={logo} alt="Logo" className="h-15 my-8" />
                <Outlet/>
            </main>
        </div>
    )
}