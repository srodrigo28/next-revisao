import { createContext, useState } from "react"
import { UserModel } from "../models/UserModel"
import loginService from "../services/loginService"
import { useRouter } from "next/navigation"

const ContextAutenticao = createContext({} as any)

export interface ContextAutenticaoProps{
    usuario: Partial<UserModel> | null
    login: (email: string, senha: string) => Promise<void>
    logout: () => void
}

const ContextoAutenticacao = createContext<ContextAutenticaoProps>

export function ProvedorAutenticacao(props: any){
    const [usuario, setUsuario] = useState<Partial<UserModel> | null>
    const router = useRouter()

    function login(email: string, senha: string){
        const usuario = loginService(email, senha)
        setUsuario(usuario)
    }
    return(
        <ContextAutenticao.Provider 
            value={{
                userApi: {
                id: 1,
                nome: 'Arnaldo Soares',
                email: 'arnaldo@gmail.com',
                senha: '123'
            }
        }}>
            {props.children}
        </ContextAutenticao.Provider>
    )
}

export default ContextAutenticao