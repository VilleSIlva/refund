import type React from "react"


export interface IitemRefound{
    userName:string,
    category:string,
    imgIcons:string,
    price:string
}

type ItemRefundProps = React.ComponentProps<'a'> & {
    data:IitemRefound
}

export function ItemRefund({data,...props}:ItemRefundProps){
    return(
        <a {...props} className="flex  items-center justify-items gap-3 bg-gray-500 cursor-pointer hover:bg-gray-400/90 rounded p-2" href="">
           <img src={data.imgIcons} alt={data.category} />
           <div className="flex-1">
                <strong className="text-sm">{data.userName}</strong>
                <p className="text-xs text-gray-200">{data.category}</p>
           </div>
           <span className="text-gray-100 text-sm">
            {data.price}
           </span>
        </a>
    )
}