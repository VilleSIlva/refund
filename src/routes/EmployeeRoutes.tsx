import { Route, Routes } from "react-router-dom";
import { Refund } from "../pages/Refund";
import { AppLayout } from "../components/AppLayout";


export function EmployeeRoutes(){
    return(
        <Routes>
            <Route element={<AppLayout/>}>
                <Route path="/refund" element={<Refund/>}/> 
            </Route>
        </Routes>
    )
}