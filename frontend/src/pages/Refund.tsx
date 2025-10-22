import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { InputFile } from "../components/InputFile";
import { Select } from "../components/Select";
import { CATEGORIES, CATEGORIES_KEY } from "../utils/category";

import { Controller,useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormProps = {
    name:string,
    price:string,
    file:File,
    category:string
}

export function Refund(){

    const [loadin,setLoading] = useState(false)
    const navigate = useNavigate()

    const {control,watch,handleSubmit} = useForm<FormProps>({defaultValues:{
        name:'',
        price:'',
        category:""
    }})


    const file = watch('file')

    function sendForm(data:FormProps){
        console.log(data)
        setLoading(true)
        navigate('/confirm',{state:{fromSubmit:true}})
    }

    return(
        <form action="" onSubmit={handleSubmit(sendForm)} className="bg-white flex flex-col p-8 w-full md:w-[550px] rounded-lg text-gray-100 gap-3">
            <header className="">
                <h1 className="font-bold text-xl" >Solicitacão de reembolso</h1>
                <p className="text-sm mt-1 mb-8">Dados da empresa para solicitar o reembolso</p>
            </header>
            
            <Controller
                control={control}
                name="name"
                render={({field})=>(<Input {...field} legend="Nome da solicitacão"/>)}
            />

            <div className="flex gap-3">

                <Controller
                    control={control}
                    name="category"
                    render={({field})=>(
                    <Select {...field} legend='Categoria'>
                        <option value="" hidden disabled>Selecione uma opcão</option>

                        {CATEGORIES_KEY.map(k=>(
                            <option key={k} value={k}>{CATEGORIES[k].name}</option>
                        ))}
                    </Select>
                )}/>

                <Controller
                    control={control}
                    name="price"
                    render={({field})=>( <Input legend="Valor" {...field} placeholder="R$00.00"/>)}
                />
            </div>

            <Controller
                control={control}
                name="file"
                render={({field:{onChange}})=>( <InputFile filename={file?.name} onChange={(e)=>onChange(e.target.files?.[0] || null)}/>)}
            />
            <Button type="submit" isLoading={loadin}>
                Enviar
            </Button>
        </form>
    )
}