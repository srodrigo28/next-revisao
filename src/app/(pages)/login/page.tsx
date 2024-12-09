'use client'
import ContextAutenticao from "@/core/context/ContextoAutenticacao"
import { useContext } from "react"

export default function Login(){
    const { userApi } = useContext(ContextAutenticao)
    return(
        <div className="h-screen w-screen bg-slate-900 flex items-center justify-center">
            <form className="bg-slate-800 w-96 h-96 p-10 flex flex-col gap-5 rounded-xl">
                <h1 className="mt-5 mb-5 text-3xl text-white text-center">Login: {userApi?.nome} </h1>
                <input type="text" className="w-full p-2 rounded-md border-none outline-none" placeholder="email@gmail.com" />
                <input type="password" className="w-full rounded-md p-2 border-none outline-none" placeholder="senha" />
                <button className="w-full rounded-md p-2 duration-300 bg-blue-700 hover:bg-blue-600 text-white">Entrar</button>
            </form>
        </div>
    )
}