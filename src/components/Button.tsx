import type React from "react";
import { classMerge } from "../utils/classMerge";

type ButtonProps = React.ComponentProps<'button'> & {
    isLoading?:boolean,
    variant?: 'base' | 'icon' | 'smalIcon'
}

const variants = {
    button:{
        base:'h-12 rounded-sm',
        icon:'h-10 w-12 rounded-lg',
        smalIcon: 'h-8 w-8 rounded-lg'
    }
}
export function Button({children,isLoading,className,variant='base',...props}:ButtonProps){
    return(
        <button
         className={classMerge([
            "bg-green-100  text-white flex items-center justify-center py-2  cursor-pointer hover:bg-green-200 transition-all disabled:opacity-50",variants.button[variant],className])}
         type="button"
         disabled={isLoading}
         {...props}>
         {children}
        </button>
    )
}