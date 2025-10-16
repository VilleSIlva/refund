import logout from "../assets/logout.svg"
import logo from "../assets/logo.svg"

export function Header(){
    return(
        <header className="flex justify-between flex-row flex-1">
            <img src={logo} alt="Logo" />

            <div className="flex items-center gap-2">
                <span className="text-gray-200 text-sm">Olá, Ville Nunes</span>
                <img src={logout} className="hover:opacity-60 transition-all" alt="imagem logout" />

            </div>
        </header>
    )
}