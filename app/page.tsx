"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

const DDDS = ["11", "12", "19", "21", "27", "31", "41", "47", "48", "51", "61", "71", "81"]

function gerarTelefone() {
  const ddd = DDDS[Math.floor(Math.random() * DDDS.length)]
  const parte = Math.floor(Math.random() * 9000) + 1000 // 4 dígitos
  return `+55 ${ddd} 9${parte}-****`
}

export default function Page() {
  const [visivel, setVisivel] = useState(false)
  const [telefone, setTelefone] = useState("+55 47 99630-****")

  useEffect(() => {
    const ciclo = () => {
      setTelefone(gerarTelefone())
      setVisivel(true)
      setTimeout(() => setVisivel(false), 2600)
    }

    const primeiro = setTimeout(ciclo, 500)
    const intervalo = setInterval(ciclo, 4000)

    return () => {
      clearTimeout(primeiro)
      clearInterval(intervalo)
    }
}, [])

const handleLeadClick = () => {
  if (typeof window !== "undefined" && window.fbq) {
    // Evento padrão do Meta
    window.fbq("track", "Lead")

    // Evento personalizado
    window.fbq("trackCustom", "EntrouGrupoVIP")
  }
}

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-[#0b0b0b] px-4 py-4 font-sans text-gray-200 antialiased">
      {/* Brilho dourado sutil no fundo */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[420px]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.14), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <main className="relative z-10 flex w-full max-w-sm flex-col items-center">
        {/* Notificação no Topo (número rotativo) */}
        <div
          className={`flex items-center gap-2.5 rounded-full border border-amber-500/40 bg-zinc-900/80 px-4 py-2 shadow-lg backdrop-blur-sm transition-all duration-500 ${
            visivel ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <p className="text-xs font-medium text-zinc-100">
            <span className="font-bold text-amber-400">{telefone}</span> acabou de entrar no grupo
          </p>
        </div>

        {/* Pílula: Participe do grupo */}
        <div className="mt-3 w-full rounded-full border border-amber-500/40 bg-zinc-900/40 px-5 py-2 text-center">
          <p className="text-sm font-semibold text-amber-400">
            &#10022; Participe do grupo de forma gratuita &#10022;
          </p>
        </div>

        {/* Card Principal */}
        <div
          className="mt-3 w-full rounded-[1.75rem] border border-amber-500/40 px-5 py-6 text-center shadow-[0_0_40px_rgba(212,175,55,0.15)]"
          style={{
            background:
              "radial-gradient(ellipse 100% 80% at 50% 0%, rgba(60,45,10,0.55), rgba(10,10,10,0.95))",
          }}
        >
          {/* Foto Circular com Borda Dourada + Selo Verificado */}
          <div className="relative mx-auto mb-4 h-32 w-32">
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 opacity-30 blur-md" />
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-amber-500 bg-zinc-950">
              <Image
                src="/logo-vip.jpeg"
                alt="Perfil do grupo VIP de ofertas secretas"
                fill
                className="object-cover"
                priority
                sizes="128px"
              />
            </div>
            {/* Selo de verificado */}
            <div className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border-4 border-[#0b0b0b] bg-amber-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-zinc-950"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Títulos */}
          <h1 className="mb-2 font-serif text-3xl font-bold leading-tight tracking-tight text-white text-balance">
            Grupo VIP de{" "}
            <span
              className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent"
              style={{ textShadow: "0 0 25px rgba(212, 175, 55, 0.35)" }}
            >
              Ofertas Secretas
            </span>
          </h1>

          <p className="mx-auto mb-4 max-w-xs text-base text-zinc-400 text-pretty">
            Cupons + ofertas com até <span className="font-bold text-white">70% OFF</span> que acabam rápido
          </p>

          {/* Contador de vagas */}
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            <span className="text-sm font-semibold text-red-300">Restam apenas 22 vagas</span>
          </div>

          {/* Botão Principal de Conversão */}
          <a
            href="https://chat.whatsapp.com/GY9Ep8Rd7u1Gl20oPL6WVA?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLeadClick}
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-b from-amber-300 to-amber-500 px-6 py-4 text-lg font-extrabold tracking-wide text-zinc-950 shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-150 hover:from-amber-200 hover:to-amber-400 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M2.25 6.75c0-.69.56-1.25 1.25-1.25.4 0 .77.19 1.01.51l3.09 4.12 3.44-5.16a1.25 1.25 0 0 1 2.08 0l3.44 5.16 3.09-4.12c.24-.32.61-.51 1.01-.51.69 0 1.25.56 1.25 1.25 0 .13-.02.26-.06.38l-2.69 9.42a1.5 1.5 0 0 1-1.44 1.09H6.44A1.5 1.5 0 0 1 5 16.55L2.31 7.13a1.25 1.25 0 0 1-.06-.38Z" />
            </svg>
            <span>ENTRAR NO GRUPO VIP</span>
          </a>
        </div>

        {/* Rodapé Discreto */}
        <footer className="mt-4 w-full text-center text-xs text-zinc-600">
          &copy; 2026 Ofertas Secretas VIP. Todos os direitos reservados.
        </footer>
      </main>
    </div>
  )
}
