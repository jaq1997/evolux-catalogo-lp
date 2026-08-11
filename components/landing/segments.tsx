'use client'

import { Check, Luggage, Scissors, ShoppingBag, Utensils } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PhoneMockup, type MockItem } from './phone-mockup'

type Segment = {
  value: string
  tab: string
  icon: LucideIcon
  title: string
  text: string
  bullets: string[]
  store: string
  categories: string[]
  items: MockItem[]
  mediaSrc?: string
}

const SEGMENTS: Segment[] = [
  {
    value: 'alimentacao',
    tab: 'Alimentação & Delivery',
    icon: Utensils,
    title: 'Pizzaria, hamburgueria, marmitaria, açaiteria',
    text: 'Cardápio com fotos, adicionais, variações de tamanho e pedido formatado direto no seu WhatsApp — sem pagar comissão por venda.',
    bullets: ['Adicionais e observações', 'Variações de tamanho', 'Pedido pronto no WhatsApp'],
    store: 'Pizzaria & Delivery',
    categories: ['Pizzas', 'Lanches', 'Bebidas'],
    items: [],
    mediaSrc: '/video-catalogo-alimentacao.mp4',
  },
  {
    value: 'servicos',
    tab: 'Serviços',
    icon: Scissors,
    title: 'Salão, barbearia, estética, oficina, academia',
    text: 'Catálogo de serviços com preços e duração, cliente escolhe e chama no WhatsApp pra agendar — sem app de terceiro no meio.',
    bullets: ['Preço e duração do serviço', 'Agendamento pelo WhatsApp', 'Sem intermediário'],
    store: 'Studio Bella',
    categories: ['Cabelo', 'Barba', 'Estética'],
    items: [
      { name: 'Corte + Barba', price: 'R$ 45,00', meta: 'Duração 50 min' },
      { name: 'Escova Progressiva', price: 'R$ 180,00', meta: 'Duração 2h' },
      { name: 'Limpeza de Pele', price: 'R$ 90,00', meta: 'Duração 1h' },
    ],
  },
  {
    value: 'turismo',
    tab: 'Turismo & Hospedagem',
    icon: Luggage,
    title: 'Pousada, hotel, agência de passeios',
    text: 'Vitrine de pacotes e experiências, com fotos e descrição, e o cliente fecha a reserva falando direto com você.',
    bullets: ['Pacotes e experiências', 'Descrição e fotos', 'Reserva direta com você'],
    store: 'Serra & Mar Turismo',
    categories: ['Passeios', 'Diárias', 'Pacotes'],
    items: [
      { name: 'Passeio de Trem', price: 'R$ 120,00', meta: 'Por pessoa' },
      { name: 'Diária Chalé Casal', price: 'R$ 320,00', meta: 'Café incluso' },
      { name: 'City Tour Completo', price: 'R$ 89,00', meta: 'Por pessoa' },
    ],
  },
  {
    value: 'varejo',
    tab: 'Varejo Geral',
    icon: ShoppingBag,
    title: 'Loja de roupa, presentes, papelaria, pet shop',
    text: 'Catálogo de produtos com categorias e variações (tamanho, cor), cliente manda o pedido pronto pelo WhatsApp.',
    bullets: ['Categorias organizadas', 'Variações de tamanho e cor', 'Pedido pronto no WhatsApp'],
    store: 'Loja de Roupas',
    categories: ['Roupas', 'Presentes', 'Acessórios'],
    items: [],
    mediaSrc: '/loja-roupas.gif',
  },
]

export function Segments() {
  return (
    <section id="para-quem-e" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Feito pra qualquer negócio que vende — literalmente qualquer um.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Alimentação, serviços, turismo ou varejo: a mesma tecnologia, com a cara do seu negócio.
          </p>
        </div>

        <Tabs defaultValue="alimentacao" className="mt-10 sm:mt-14">
          <TabsList className="mx-auto grid h-auto w-full max-w-3xl grid-cols-2 gap-2.5 bg-transparent p-0 sm:grid-cols-4 sm:gap-3">
            {SEGMENTS.map((seg) => {
              const Icon = seg.icon
              return (
                <TabsTrigger
                  key={seg.value}
                  value={seg.value}
                  className="flex h-auto flex-col items-center justify-center gap-2 rounded-2xl border border-border/80 bg-card px-3 py-4 text-xs font-semibold text-muted-foreground transition-all hover:border-brand/40 hover:text-foreground data-[state=active]:border-brand data-[state=active]:bg-brand-soft data-[state=active]:text-brand-dark data-[state=active]:shadow-sm"
                >
                  <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span className="text-center leading-snug">{seg.tab}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {SEGMENTS.map((seg) => (
            <TabsContent key={seg.value} value={seg.value} className="mt-8 sm:mt-10">
              <div className="grid items-center gap-8 rounded-3xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10 shadow-soft">
                <div className="flex flex-col justify-center">
                  <span className="inline-flex w-fit items-center rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-dark mb-3">
                    {seg.tab}
                  </span>
                  <h3 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">{seg.title}</h3>
                  <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{seg.text}</p>
                  <ul className="mt-6 space-y-3">
                    {seg.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm font-medium text-foreground">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center w-full pt-4 lg:pt-0">
                  <PhoneMockup mediaSrc={seg.mediaSrc} storeName={seg.store} categories={seg.categories} items={seg.items} />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
