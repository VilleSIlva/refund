import { Routes,Route } from "react-router-dom"
import { SingIn } from "../pages/singIn"
import { AuthLayout } from "../components/AuthLayout"
import { NotFound } from "../pages/NotFound"
import { SingUp } from "../pages/SingUp"

export function AuthRoutes(){
    return(
        <Routes>
            <Route element={<AuthLayout/>}>
                <Route path="/" element={<SingIn/>}/>
                <Route path="/register" element={<SingUp/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}