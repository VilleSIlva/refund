import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function AppLayout(){
    return(
        <div className="h-screen w-screen flex items-center flex-col bg-gray-400">
            <main className="flex p-8 flex-col w-full md:w-auto space-y-8 ">
                <Header/>
                <Outlet/>
            </main>
        </div>
    )
}