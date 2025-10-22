import { BrowserRouter } from "react-router-dom";
import { ManagerRoutes } from "./ManagerRoutes";


export function Routes(){
    return(
        <BrowserRouter>
            <ManagerRoutes/>
        </BrowserRouter>
    )
}