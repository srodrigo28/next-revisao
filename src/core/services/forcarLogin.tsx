'use client'

import { useContext, useEffect } from "react"
import ContextAutenticao from "../context/ContextoAutenticacao"
import { useRouter } from "next/navigation"

export default function forcarLogin( {children} : any){
    const { usuario } = useContext(ContextAutenticao)
    const router = useRouter()

    useEffect(() => {
        if (usuario === null) {
            return router.push('/auth')
        }
    }, [usuario, router])

    return usuario ? children : null
}
