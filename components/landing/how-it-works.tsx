import { MessageCircle, ShoppingBag, Smartphone } from 'lucide-react'

const STEPS = [
  {
    icon: Smartphone,
    step: '01',
    title: 'Navega e escolhe',
    description: 'Vitrine responsiva com categorias, fotos, variações e adicionais por item.',
  },
  {
    icon: ShoppingBag,
    step: '02',
    title: 'Monta o carrinho',
    description: 'Quantidades, observações, frete por CEP ou retirada — tudo calculado na hora.',
  },
  {
    icon: MessageCircle,
    step: '03',
    title: 'Finaliza no Zap',
    description: 'O pedido chega formatado direto no seu WhatsApp, pronto para produção ou envio.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-dark">
            Simplicidade na conversão
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Três passos até a venda
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Interface pública pensada para conversão: rápida, responsiva e clara em qualquer tela.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-2xl font-black text-brand/30">{item.step}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
