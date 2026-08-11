import { Check, ShieldCheck, X } from 'lucide-react'

const EVOLUX_FEATURES = [
  {
    title: 'Pagamento Único',
    description: 'Você paga uma vez e o catálogo é seu. Sem mensalidades eternas nem taxas por pedido.',
  },
  {
    title: 'Marca e Domínio Próprios',
    description: 'Sua própria identidade visual, no seu domínio personalizado, transmitindo 100% de autoridade.',
  },
  {
    title: 'Propriedade dos Dados',
    description: 'Sua lista de clientes e catálogo de produtos são 100% seus. Você não é inquilino de ninguém.',
  },
  {
    title: 'Suporte Humano via WhatsApp',
    description: 'Atendimento direto com especialista para tirar dúvidas e ajudar no seu negócio.',
  },
  {
    title: 'Velocidade e Estabilidade',
    description: 'Site exclusivo que carrega instantaneamente no 4G, sem sair do ar em feriados ou picos de venda.',
  },
  {
    title: 'Adaptável a Qualquer Segmento',
    description: 'Personalizado para delivery de comida, serviços, pousadas/turismo e lojas de varejo.',
  },
]

const COMMON_PLATFORMS_FEATURES = [
  {
    title: 'Mensalidade e Comissões Eterna',
    description: 'Cobrança todo mês + porcentagem em cima de cada venda que você faz.',
  },
  {
    title: 'Link Genérico Compartilhado',
    description: 'Sua loja fica presa em um subdomínio genérico junto com centenas de concorrentes.',
  },
  {
    title: 'Modelo Inquilino',
    description: 'Se a plataforma mudar as regras, aumentar preços ou bloquear sua conta, você perde tudo.',
  },
  {
    title: 'Suporte por Robô ou Ticket',
    description: 'Sem atendimento rápido quando o sistema dá problema em momentos decisivos.',
  },
  {
    title: 'Instabilidade em Datas Comemorativas',
    description: 'Servidores compartilhados que ficam lentos ou fora do ar no Dia dos Namorados e finais de semana.',
  },
  {
    title: 'Foco Limitado',
    description: 'Geralmente atendem apenas um nicho (como delivery de comida), sem flexibilidade.',
  },
]

export function Comparison() {
  return (
    <section id="comparativo" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-dark">
            Comparativo de Mercado
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Por que o Evolux Catálogo é a escolha certa?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Veja a diferença entre ter a sua própria vitrine digital vs alugar espaço em plataformas terceirizadas.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Card Evolux Catálogo (Destaque Principal) */}
          <div className="relative flex flex-col justify-between rounded-3xl border-2 border-brand/50 bg-card p-6 shadow-lift sm:p-8">
            <div className="absolute -top-3.5 left-6 inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-1 text-xs font-extrabold text-brand-foreground shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              Evolux Catálogo · Sua Melhor Escolha
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-border/80 pb-5 pt-2">
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-foreground">Evolux Catálogo</h3>
                  <p className="text-xs font-semibold text-brand">Sua vitrine, suas regras</p>
                </div>
                <span className="rounded-xl bg-brand-soft px-3 py-1.5 text-xs font-extrabold text-brand-dark">
                  Pagamento Único
                </span>
              </div>

              <ul className="mt-6 space-y-5">
                {EVOLUX_FEATURES.map((item) => (
                  <li key={item.title} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-sm">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card Plataformas Alugadas (Modelo Inquilino) */}
          <div className="flex flex-col justify-between rounded-3xl border border-border/80 bg-secondary/30 p-6 sm:p-8">
            <div>
              <div className="flex items-center justify-between border-b border-border/80 pb-5 pt-2">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-muted-foreground">Plataformas Alugadas</h3>
                  <p className="text-xs font-medium text-muted-foreground">Modelo inquilino</p>
                </div>
                <span className="rounded-xl bg-muted px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                  Mensalidade + %
                </span>
              </div>

              <ul className="mt-6 space-y-5">
                {COMMON_PLATFORMS_FEATURES.map((item) => (
                  <li key={item.title} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                      <X className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-foreground/80">{item.title}</h4>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
