import { BrowserRouter } from "react-router-dom";
import { ManagerRoutes } from "./ManagerRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { AuthRoutes } from "./AuthRoutes";


export function Routes(){

    interface SessionProps{
        user:{
            role: 'manager' | 'employee' | null
        }
    }
    const session:SessionProps = {
        user:{
            role: null
        }
    }
    function Route(){
        switch(session?.user.role){
            case 'manager':
                return <ManagerRoutes/>
            case 'employee':
                return <EmployeeRoutes/>
            default:
                return <AuthRoutes/>
        }
    }


    return(
        <BrowserRouter>
            <Route/>
        </BrowserRouter>
    )
}