import { CreditCard, Link, Palette, Upload } from 'lucide-react'

const STEPS = [
  {
    icon: CreditCard,
    step: '01',
    title: '1. Garanta sua vaga na fila de montagem',
    description: 'Faça o pagamento único de R$ 397,00 (em até 12x no cartão ou via Pix com aprovação imediata).',
  },
  {
    icon: Upload,
    step: '02',
    title: '2. Envie os materiais da sua loja',
    description: 'Logo após a compra, você responde ao nosso formulário simples enviando sua logo, categorias e fotos dos produtos.',
  },
  {
    icon: Palette,
    step: '03',
    title: '3. Nossa equipe monta tudo para você',
    description: 'Criamos sua vitrine personalizada, organizamos o visual da loja e cadastramos seus produtos com variações de tamanho (P, M, G, GG) e cor.',
  },
  {
    icon: Link,
    step: '04',
    title: '4. Receba seu link pronto para vender',
    description: 'Em até 3 dias úteis, entregamos seu link exclusivo para você colocar na bio do Instagram e receber pedidos formatados direto no seu WhatsApp.',
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
            Como funciona o seu cadastro assistido em 4 passos
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
