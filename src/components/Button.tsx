import type React from "react";

type ButtonProps = React.ComponentProps<'button'> & {
    isLoading?:boolean
}

export function Button({children,isLoading,...props}:ButtonProps){
    return(
        <button
         className="bg-green-100 rounded-sm text-white py-2 mt-3 cursor-pointer hover:bg-green-200 transition-all disabled:opacity-50"
         type="button"
         disabled={isLoading}
         {...props}>
         {children}
        </button>
    )
}