import { Button } from "./Button"
import left from '../assets/left.svg'
import right from '../assets/right.svg'

interface PaginateProps {
    current:number
    total:number
    onNext: ()=>void
    onPrevius: ()=>void
}

export function Paginate({current,total,onNext,onPrevius}:PaginateProps){
    return (
        <div className="flex items-center justify-center gap-2 mt-2">
            <Button onClick={onPrevius} variant="smalIcon" disabled={current === 1}>
                <img src={left} alt="icone de seta" />
            </Button>
            <span className="text-gray-100 text-sm">{current} / {total}</span>
            <Button onClick={onNext} variant="smalIcon" disabled={current === total}>
                <img src={right}  alt="icone de seta" />
            </Button>
        </div>
    )
}