import { MessageCircle, ShieldCheck, Smartphone, Zap } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: Zap,
    title: 'Carregamento na borda (Edge)',
    description: 'Entrega global ultra rápida com latência mínima em redes móveis (3G/4G/5G).',
  },
  {
    icon: Smartphone,
    title: '100% Responsivo',
    description: 'Funciona perfeitamente em qualquer modelo de smartphone, tablet ou PC — sem baixar aplicativo.',
  },
  {
    icon: ShieldCheck,
    title: 'Dados Protegidos',
    description: 'Sua base de produtos e clientes protegida em infraestrutura gerenciada de alta segurança.',
  },
  {
    icon: MessageCircle,
    title: 'Integração WhatsApp',
    description: 'O cliente monta o pedido completo e ele chega limpo e formatado no seu atendimento.',
  },
]

export function TechStack() {
  return (
    <section id="tecnologia" className="scroll-mt-20 border-y border-border/70 bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-dark">
              Infraestrutura de alta performance
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Leve por fora, robusto por dentro.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Sua vitrine é servida na borda da internet para carregar instantaneamente, mesmo no 4G do seu cliente. Escalabilidade garantida nos picos de venda.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-0.5">
                <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
