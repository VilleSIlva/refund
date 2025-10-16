import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { CATEGORIES, CATEGORIES_KEY } from "../utils/category";

export function Refund(){
    return(
        <form action="" className="bg-white flex flex-col p-8 w-full md:w-[550px] rounded-lg text-gray-100 gap-3">
            <header className="">
                <h1 className="font-bold text-xl" >Solicitacão de reembolso</h1>
                <p className="text-sm mt-1 mb-8">Dados da empresa para solicitar o reembolso</p>
            </header>
            <Input legend="Nome da solicitacão"/>
            <div className="flex gap-3">
                <Select defaultValue={""} legend='Categoria'>
                    <option value="" hidden disabled>Selecione uma opcão</option>

                    {CATEGORIES_KEY.map(k=>(
                        <option key={k} value={k}>{CATEGORIES[k].name}</option>
                    ))}
                </Select>
                <Input legend="Valor" placeholder="R$"/>
            </div>
        </form>
    )
}