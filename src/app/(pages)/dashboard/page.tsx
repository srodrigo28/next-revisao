'use client'
import ContextAutenticao from "@/core/context/ContextoAutenticacao"
import { useContext } from "react"

interface DashboardProps {
    gradient?: boolean
}
// bg-gradient-to-tr from-green-600 via-yellow-600 to-red-700
export default function Dashboard(props: DashboardProps) {
    const { userApi } = useContext(ContextAutenticao)
    return (
        <div className="
            h-screen p-10
            bg-slate-900 
            text-white">
            <h1 className="text-center text-5xl font-extrabold bg-gradient-to-tr
            from-red-500 to-yellow-200 
            bg-clip-text text-transparent">Dashboard 2</h1>
            <p className="text-2xl">{userApi?.nome} - {userApi?.email}</p>
        </div>

    )
}