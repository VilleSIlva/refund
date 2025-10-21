import { Routes,Route } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { AppLayout } from "../components/AppLayout";
import { Dashboard } from "../pages/Dashboard";

export function ManagerRoutes(){
    return(
        <Routes>
            <Route element={<AppLayout/>}>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}
