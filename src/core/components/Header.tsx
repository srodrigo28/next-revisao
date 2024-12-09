import Link from "next/link";

export default function Cabecalho(){
    return(
        <header className="bg-zinc-950 w-screen h-28 p-5 flex justify-between items-center">
            <div className="w-20 h-10 rounded-xl bg-slate-700"></div>
            <nav className="bg-slate-700 p-2 flex gap-3 rounded-lg px-5">
                <Link href="" className="text-sm text-white border-r-2 pr-2">Cadastro</Link>
                <Link href="" className="text-sm text-white border-r-2 pr-2">Dashboard</Link>
                <Link href="" className="text-sm text-white">Contato</Link>
            </nav>
            { "" === null ? (
                // usuario === null
                <Link href="/login" className="hover:bg-red-600 duration-300 bg-slate-700 p-2 px-6 rounded-md text-white text-sm flex items-center justify-center">Sair</Link>
            ) : (
                <Link href="/login" className="hover:bg-red-600 duration-300 bg-slate-700 p-2 px-6 rounded-md text-white text-sm flex items-center justify-center">Sair</Link>
            )}
        </header>
    )
}