import { Link } from "react-router-dom";

export function NotFound(){
    return(
        <div className="flex items-center justify-center  w-screen h-screen flex-col">
          <div>
              <h1 className="font-bold text-4xl">O'ps, essa página não existe</h1>
              <Link className="text-md block font-semibold text-green-100 mt-5" to={'/'}>Voltar para o Inicio</Link>
          </div>
        </div>
    )
}