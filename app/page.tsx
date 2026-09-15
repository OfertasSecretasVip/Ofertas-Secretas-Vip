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
  const parte = Math.floor(Math.random() * 9000) + 1000
  return `+55 ${ddd} 9${parte}-****`
}

export default function Page() {
  const [visivel, setVisivel] = useState(false)
  const [telefone, setTelefone] = useState("+55 47 99630-****")

  useEffect(() => {
    const ciclo = () => {
      setTelefone(gerarTelefone())
      setVisivel(true)
      setTimeout(() => setVisivel(false), 2800)
    }

    const primeiro = setTimeout(ciclo, 500)
    const intervalo = setInterval(ciclo, 5000)

    return () => {
      clearTimeout(primeiro)
      clearInterval(intervalo)
    }
  }, [])

  const handleLeadClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead")
      window.fbq("trackCustom", "EntrouGrupoVIP")
    }
  }

  return (
    <div className="min-h-screen bg-[#fff8fa] px-4 py-5 font-sans text-slate-900 antialiased sm:py-8">
      <main className="mx-auto flex w-full max-w-[430px] flex-col items-center">
        {/* Prova social simples */}
        <div
          className={`mb-4 flex min-h-10 items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 shadow-sm transition-all duration-500 ${
            visivel ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
          }`}
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <p className="text-xs text-slate-600">
            <span className="font-semibold text-slate-800">{telefone}</span> acabou de entrar no grupo
          </p>
        </div>

        {/* Card principal */}
        <section className="w-full overflow-hidden rounded-[28px] border border-rose-100 bg-white px-6 pb-7 pt-6 text-center shadow-[0_18px_50px_rgba(190,24,93,0.08)] sm:px-8">
          <div className="mb-5 inline-flex items-center rounded-full bg-rose-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-rose-600">
            Grupo gratuito no WhatsApp
          </div>

          <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_5px_22px_rgba(15,23,42,0.15)]">
            <Image
              src="/logo-vip.jpeg"
              alt="Ofertas Secretas VIP"
              fill
              className="object-cover"
              priority
              sizes="96px"
            />
          </div>

          <p className="mb-1 text-sm font-bold uppercase tracking-[0.12em] text-rose-500">Ofertas Secretas VIP</p>
          <h1 className="text-balance text-[2rem] font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-[2.2rem]">
            Grupo de Ofertas no WhatsApp
          </h1>

          <p className="mx-auto mt-4 max-w-[330px] text-[15px] leading-6 text-slate-600">
            Receba <strong className="font-semibold text-slate-800">ofertas, cupons e achadinhos</strong> selecionados todos os dias direto no seu WhatsApp.
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-2xl bg-[#fff5f7] px-2 py-3">
              <span className="block text-xl" aria-hidden="true">🏷️</span>
              <span className="mt-1 block text-[11px] font-semibold leading-tight text-slate-700">Ofertas do dia</span>
            </div>
            <div className="rounded-2xl bg-[#fff5f7] px-2 py-3">
              <span className="block text-xl" aria-hidden="true">🎟️</span>
              <span className="mt-1 block text-[11px] font-semibold leading-tight text-slate-700">Cupons</span>
            </div>
            <div className="rounded-2xl bg-[#fff5f7] px-2 py-3">
              <span className="block text-xl" aria-hidden="true">💸</span>
              <span className="mt-1 block text-[11px] font-semibold leading-tight text-slate-700">Achadinhos</span>
            </div>
          </div>

          <a
            href="https://chat.whatsapp.com/GY9Ep8Rd7u1Gl20oPL6WVA?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLeadClick}
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-5 py-4 text-base font-extrabold text-white shadow-[0_10px_24px_rgba(37,211,102,0.24)] transition-transform duration-150 hover:brightness-95 active:scale-[0.98]"
          >
            <svg viewBox="0 0 32 32" fill="currentColor" className="h-6 w-6 shrink-0" aria-hidden="true">
              <path d="M19.11 17.2c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.25.18 1.72.11.53-.08 1.59-.65 1.82-1.28.23-.63.23-1.16.16-1.28-.07-.11-.25-.18-.52-.32Z" />
              <path d="M16.03 3C8.86 3 3.03 8.79 3.03 15.92c0 2.28.6 4.5 1.73 6.45L3 28.8l6.59-1.72a13.02 13.02 0 0 0 6.43 1.64h.01c7.16 0 13-5.8 13-12.92C29.03 8.79 23.19 3 16.03 3Zm0 23.54h-.01a10.8 10.8 0 0 1-5.51-1.5l-.4-.24-3.91 1.02 1.04-3.8-.26-.39a10.68 10.68 0 0 1-1.66-5.71c0-5.94 4.82-10.76 10.75-10.76 2.87 0 5.57 1.12 7.6 3.15a10.67 10.67 0 0 1 3.15 7.59c0 5.93-4.83 10.75-10.79 10.75Z" />
            </svg>
            ENTRAR NO GRUPO DO WHATSAPP
          </a>

          <p className="mt-3 text-xs text-slate-400">É grátis. Entre e acompanhe as ofertas quando quiser.</p>
        </section>

        <footer className="mt-5 text-center text-xs text-slate-400">
          © 2026 Ofertas Secretas VIP
        </footer>
      </main>
    </div>
  )
}
