import {Link, Navigate, useLocation} from 'react-router-dom'
import approved from '../assets/approved.svg'


export function Confirm(){
    const location = useLocation()

    if(!location.state?.fromSubmit){
        return <Navigate to={'/'}/>
    }
    return (
        <div className='md:w-[550px] p-10 bg-white flex flex-col rounded-md justify-center'>
            <h1 className='font-bold text-2xl text-center text-green-100'>Solicitacão Enviada</h1>
            <img src={approved} className='h-48 my-5' alt="confirm" />
            <p className='text-sm text-center text-gray-200'>
                Agora é apenas aguardar! Sua solicitacao será analisada e, em breve, o setor 
                financeiro irá entrar em contato com você
            </p>
            <Link className='bg-green-100 flex items-center justify-center hover:bg-green-200 text-white rounded-sm h-10 mt-5' to={'/'}>Nova Solicitacao</Link>
        </div>
    )
}