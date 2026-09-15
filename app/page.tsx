"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export default function Page() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const ciclo = () => {
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
    <div className="min-h-screen bg-[#fff8fa] px-3 py-4 font-sans text-slate-900 antialiased sm:py-6">
      <main className="mx-auto flex w-full max-w-[430px] flex-col items-center">
        <div
          className={`mb-4 flex min-h-11 items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2.5 shadow-sm transition-all duration-500 ${
            visivel ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
          }`}
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <p className="text-[13px] font-medium text-slate-700 sm:text-[14px]">Novos membros entrando no grupo</p>
        </div>

        <div className="mb-4 flex min-h-11 items-center justify-center gap-2 rounded-full border border-rose-100 bg-white px-5 py-2.5 shadow-sm">
          <span className="text-[17px]" aria-hidden="true">🔥</span>
          <p className="text-[13px] text-slate-700 sm:text-[14px]">
            <span className="font-bold text-rose-500">Vagas limitadas</span> no grupo
          </p>
        </div>

        <section className="w-full overflow-hidden rounded-[26px] border border-rose-100 bg-white px-5 pb-7 pt-6 text-center shadow-[0_14px_40px_rgba(190,24,93,0.07)] sm:px-6">
          <div className="mb-4 inline-flex items-center rounded-full bg-rose-50 px-4 py-2 text-[12px] font-bold uppercase tracking-wide text-rose-600">
            Grupo gratuito no WhatsApp
          </div>

          <div className="relative mx-auto mb-6 mt-1 h-[162px] w-[162px] overflow-hidden rounded-full border-[3px] border-white bg-white shadow-[0_4px_16px_rgba(15,23,42,0.13)]">
            <Image
              src="/perfil-ofertas-vip.webp"
              alt="Ofertas Secretas VIP - Grupo de Ofertas no WhatsApp"
              fill
              className="object-cover"
              priority
              sizes="162px"
            />
          </div>

          <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.12em] text-rose-500">Ofertas Secretas VIP</p>
          <h1 className="text-balance text-[2.12rem] font-extrabold leading-[1.04] tracking-tight text-slate-900 sm:text-[2.12rem]">
            Grupo de Ofertas no WhatsApp
          </h1>

          <p className="mx-auto mt-4 max-w-[360px] text-[15.5px] leading-[1.5] text-slate-600">
            Ofertas, cupons e achadinhos selecionados todos os dias direto no seu WhatsApp.
          </p>

          <div className="mx-auto mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] font-semibold text-slate-700">
            <span>✓ Ofertas diárias</span>
            <span>✓ Cupons</span>
            <span>✓ Grupo grátis</span>
          </div>

          <a
            href="https://chat.whatsapp.com/GY9Ep8Rd7u1Gl20oPL6WVA?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLeadClick}
            className="cta-pulse mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-[20px] text-[16.5px] font-extrabold text-white shadow-[0_10px_26px_rgba(37,211,102,0.28)] transition-transform duration-150 hover:brightness-95 active:scale-[0.98]"
          >
            <svg viewBox="0 0 32 32" fill="currentColor" className="h-6 w-6 shrink-0" aria-hidden="true">
              <path d="M19.11 17.2c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.25.18 1.72.11.53-.08 1.59-.65 1.82-1.28.23-.63.23-1.16.16-1.28-.07-.11-.25-.18-.52-.32Z" />
              <path d="M16.03 3C8.86 3 3.03 8.79 3.03 15.92c0 2.28.6 4.5 1.73 6.45L3 28.8l6.59-1.72a13.02 13.02 0 0 0 6.43 1.64h.01c7.16 0 13-5.8 13-12.92C29.03 8.79 23.19 3 16.03 3Zm0 23.54h-.01a10.8 10.8 0 0 1-5.51-1.5l-.4-.24-3.91 1.02 1.04-3.8-.26-.39a10.68 10.68 0 0 1-1.66-5.71c0-5.94 4.82-10.76 10.75-10.76 2.87 0 5.57 1.12 7.6 3.15a10.67 10.67 0 0 1 3.15 7.59c0 5.93-4.83 10.75-10.79 10.75Z" />
            </svg>
            ENTRAR NO GRUPO DO WHATSAPP
          </a>

          
        </section>

        <footer className="mt-4 text-center text-[11px] text-slate-400">© 2026 Ofertas Secretas VIP</footer>
      </main>
    </div>
  )
}
