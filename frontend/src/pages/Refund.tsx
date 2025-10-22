import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { InputFile } from "../components/InputFile";
import { Select } from "../components/Select";
import { CATEGORIES, CATEGORIES_KEY } from "../utils/category";

import { Controller,useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import fileSvg from '../assets/file.svg'

type FormProps = {
    name:string,
    price:string,
    file:File,
    category:string
}

export function Refund(){

    const [loadin,setLoading] = useState(false)
    const navigate = useNavigate()
    const params = useParams<{id:string}>()

    const {control,watch,handleSubmit} = useForm<FormProps>({defaultValues:{
        name:'teste',
        price:'20',
        category:"1"
    }})


    const file = watch('file')

    function sendForm(data:FormProps){
        console.log(data)
        if(params.id){
            return navigate(-1)
        }
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
                disabled={!!params.id}
                render={({field})=>(<Input {...field} legend="Nome da solicitacão"/>)}
            />

            <div className="flex gap-3">

                <Controller
                    control={control}
                    disabled={!!params.id}
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
                    disabled={!!params.id}
                    name="price"
                    render={({field})=>( <Input legend="Valor" {...field} placeholder="R$00.00"/>)}
                />
            </div>

            {params.id ?
             (<a className="text-center text-sm text-green-200 my-5 flex items-center justify-center gap-3 hover:text-green-100" href="">
                <img src={fileSvg} alt="" />Abrir Comprovante
             </a>)
              :
              (
              <Controller
                control={control}
                name="file"
                render={({field:{onChange}})=>( <InputFile filename={file?.name} onChange={(e)=>onChange(e.target.files?.[0] || null)}/>)}
            />)}

            <Button type="submit" isLoading={loadin}>
                {params.id ? 'Voltar' : 'Enviar'}
            </Button>
        </form>
    )
}