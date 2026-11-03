import { ArrowRight, PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CHECKOUT_URL } from '@/lib/site'
import { PhoneMockup } from './phone-mockup'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-brand-soft/60" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        <div>
          <span className="inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-dark">
            OFERTA DE PRÉ-BLACK FRIDAY — VAGAS LIMITADAS DE MONTAGEM
          </span>
          <h1 className="mt-5 text-balance text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Sua Vitrine Digital Pronta em Até 3 Dias Úteis. Sem Mensalidades.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Chega de perder tempo enviando fotos soltas e preços no WhatsApp. Nossa equipe entrega seu catálogo profissional pronto com fotos, categorias e tamanhos (P, M, G, GG) para você receber pedidos organizados em 1 clique.
          </p>

          <div className="mt-8">
            <span className="text-lg font-black text-brand sm:text-xl">
              12x de R$ 41,06
            </span>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">
              Sem juros
            </p>
          </div>

          <div className="mt-6">
            <Button
              size="lg"
              render={<a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" />}
              className="h-12 px-6 text-base bg-brand font-semibold text-brand-foreground hover:bg-brand-dark shadow-lift transition-transform hover:-translate-y-0.5"
            >
              QUERO MINHA VITRINE PRONTA POR 12X DE R$ 41,06
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <p className="mt-4 text-xs font-semibold text-muted-foreground flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Garantia incondicional de 7 dias · Reembolso 100% garantido pela Kiwify
          </p>

        </div>

        <div className="relative">
          <div
            className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-brand-soft/70 blur-0 sm:-inset-8"
            aria-hidden="true"
          />
          <PhoneMockup
            mediaSrc="/loja-roupas.gif"
            alt="Demonstração da Vitrine Digital - Loja de Roupas"
          />
        </div>
      </div>
    </section>
  )
}
