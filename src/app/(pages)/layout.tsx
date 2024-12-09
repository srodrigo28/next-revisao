'use client'
import { ProvedorAutenticacao } from "@/core/context/ContextoAutenticacao";

export default function Layout(props: any){
    return <ProvedorAutenticacao>
        <p>inicio</p>
            {props.children}
        <p>fim</p>
        </ProvedorAutenticacao>
}
