import ContextAutenticao from "@/core/context/ContextoAutenticacao";
import Link from "next/link";


export default function Home() {
  return (
      <div className="h-screen w-screen flex flex-col">      
        <header className="bg-zinc-950 w-screen h-28 p-5 flex justify-between items-center">
              <div className="w-20 h-10 rounded-xl bg-slate-700  hover:bg-green-600 duration-300"></div>
              <nav className="bg-slate-700 p-2 flex gap-3 rounded-lg px-5">
                  <Link href="" className="text-sm text-white border-r-2 pr-2 hover:text-green-600 duration-300">Cadastro</Link>
                  <Link href="" className="text-sm text-white border-r-2 pr-2 hover:text-green-600 duration-300">Dashboard</Link>
                  <Link href="" className="text-sm text-white hover:text-green-600 duration-300">Contato</Link>
              </nav>
              <Link href="/login" className="hover:bg-red-600 duration-300 bg-slate-700 p-2 px-6 rounded-md text-white text-sm flex items-center justify-center">Sair</Link>
          </header>
        <main className="flex-1 bg-slate-700 text-white p-5">
        <h1>Teste</h1>
        </main>
        <footer className="w-screen h-12 bg-zinc-900 text-white flex items-center justify-center">
              <h2>Footer</h2>
          </footer>
      </div>
  );
}
