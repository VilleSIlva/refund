import { BrowserRouter } from "react-router-dom";
import { EmployeeRoutes } from "./EmployeeRoutes";

export function Routes(){
    return(
        <BrowserRouter>
            <EmployeeRoutes/>

        </BrowserRouter>
    )
}