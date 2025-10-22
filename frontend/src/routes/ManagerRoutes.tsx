import { Routes,Route } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { AppLayout } from "../components/AppLayout";
import { Dashboard } from "../pages/Dashboard";
import { Refund } from "../pages/Refund";

export function ManagerRoutes(){
    return(
        <Routes>
            <Route element={<AppLayout/>}>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/refund/:id" element={<Refund/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}
