import { Controller,useForm} from "react-hook-form";

import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Link } from "react-router-dom";


interface FormProps{
    email:string
    password:string
    name:string
    password_confirmed:string
}
export function SingUp(){
    const [loading,setLoading] = useState(false)
    const {control,handleSubmit} = useForm<FormProps>({defaultValues:{
        name:"",
        email:"",
        password:"",
        password_confirmed:""
    }})

    function sedForm(data:FormProps){
        setLoading(true)
        console.log(data)
    }
    

    return (
        <form onSubmit={handleSubmit(sedForm)} className="flex flex-col gap-2 w-full" action="">

            <Controller
                control={control}
                name="name"
                render={({field})=>(<Input legend="NOme"  {...field}  placeholder="Seu Nome"/>)}
            />

            <Controller
                control={control}
                name="email"
                render={({field})=>(<Input legend="E-mail"  {...field}  placeholder="seuemail@email.com"/>)}
            />

            <Controller
                control={control}
                name="password"
                render={({field})=>( <Input legend="Senha" {...field} type="password" placeholder="Senha"/>)}
            />

            <Controller
                control={control}
                name="password_confirmed"
                render={({field})=>( <Input legend="Confirmar Senha" {...field} type="password" placeholder="Senha"/>)}
            />
           
            <Button isLoading={loading} type="submit">Cadastrar</Button>

            <Link className="mt-2 text-green-100  text-xxs" to={'/'}>Já tenho conta?</Link>
        </form>
    )
}