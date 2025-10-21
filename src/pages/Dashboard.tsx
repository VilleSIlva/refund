import { useState, type FormEvent } from "react";
import { Input } from "../components/Input";

import searchSvg from '../assets/search.svg'
import { Button } from "../components/Button";
import { ItemRefund, type IitemRefound } from "../components/ItemRefund";
import { CATEGORIES } from "../utils/category";
import { currentPrice } from "../utils/currentPrice";

export function Dashboard(){
    const item:IitemRefound = {
        userName: 'VIlle Nunes',
        price: currentPrice(35.0),
        imgIcons:CATEGORIES.food.image,
        category:CATEGORIES.food.name
    }

    const [name,setName] = useState('')
    function fetchRefounds(e:FormEvent){
        e.preventDefault()
        console.log(name)

    }
    return (
        <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px] w-full">  
            <h1 className="text-xl text-gray-100 font-bold">Solicitacoes</h1>
            <form action="" onSubmit={fetchRefounds} className="flex items-center justify-center pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6 flex-1">
                <Input onChange={(e)=>setName(e.target.value)} placeholder="Pesquisar pelo nome"/>
                <Button variant="icon"><img src={searchSvg} alt="Ícone de lupa" /></Button>
            </form>

            <div className="p-3 mt-5 overflow-y-auto flex gap-1 flex-col max-h-[360px]">
                <ItemRefund data={item}/>
            </div>
        </div>
    )
}