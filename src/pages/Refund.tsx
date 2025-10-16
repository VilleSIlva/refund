import { Input } from "../components/Input";

export function Refund(){
    return(
        <form action="" className="bg-white flex flex-col p-8 w-full md:w-[550px] rounded-lg text-gray-100 gap6">
            <header className="">
                <h1 className="font-bold text-xl" >Solicitacão de reembolso</h1>
                <p className="text-sm mt-1 mb-8">Dados da empresa para solicitar o reembolso</p>
            </header>
            <Input legend="Nome da solicitacão"/>
        </form>
    )
}