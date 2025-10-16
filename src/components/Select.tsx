import type { SelectHTMLAttributes } from "react"

type SelectProps =  SelectHTMLAttributes<HTMLSelectElement>&{
    legend?:string
}
export function Select({legend,children,...props}:SelectProps){
    return (
        <fieldset className="text-gray-700 flex focus-within:text-green-100 flex-1">
            {legend && (<legend className="text-inherit uppercase text-sm">{legend}</legend>)}
            <select
             className="w-full h-10 rounded-sm border border-gray-300 px-3 mt-2 text-gray-200 focus:outline-green-100 bg-transparent" 
             {...props}>
                {children}
            </select>
        </fieldset>
    )
}
