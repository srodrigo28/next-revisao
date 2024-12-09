import { userApi } from "../data/UserApi";
import { UserModel } from "../models/UserModel";

export default function loginService( email: string, senha: string): UserModel | never{
    const usuario = userApi.find( 
        (user) => user.email === email && user.senha )
        if(!usuario){
            throw new Error('Usuário não encontrado')
        }
        if(!senha){
            throw new Error('Senha não foi encontrada')
        }
    return { ...usuario, senha: undefined}
}
