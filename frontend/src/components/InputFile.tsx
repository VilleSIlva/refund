import type { InputHTMLAttributes } from "react"
import file from '../assets/upload.svg'

type InputFileProps =  InputHTMLAttributes<HTMLInputElement>&{
    filename?:string
}
export function InputFile({filename,...props}:InputFileProps){
    return (
        <div className="text-gray-200 focus-within:text-green-100 ">
            <legend className="text-inherit uppercase text-sm mb-2">Comprovante</legend>
            <label htmlFor="file" className="flex-1 border flex rounded-r-lg border-gray-300 items-center">
                <span className="text-inherittext-sm pl-4 flex-1">{filename ?? "Selecione um Arquivo"}</span>
                <input hidden id="file" className="w-full h-10 rounded-sm border border-gray-300 px-3 mt-2 text-gray-200 focus:outline-green-100 bg-transparent" type="file"{...props} />
                <label htmlFor="file" className="p-1 cursor-pointer rounded-md bg-green-200">
                    <img src={file} alt="" />
                </label>
            </label>
        </div>
    )
}
