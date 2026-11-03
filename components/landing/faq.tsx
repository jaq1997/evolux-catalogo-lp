import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQS = [
  {
    q: 'O valor de R$ 397 tem alguma cobrança de mensalidade?',
    a: 'Não! O pagamento de R$ 397 é único. Você paga uma vez e a vitrine é sua, sem taxa de manutenção ou comissão sobre suas vendas.',
  },
  {
    q: 'Não entendo de tecnologia, vou conseguir usar?',
    a: 'Com certeza. Nossa equipe cadastra seus produtos iniciais e te entrega o link pronto em até 3 dias úteis após você enviar as fotos no formulário de onboarding.',
  },
  {
    q: 'Quanto tempo demora para o meu catálogo ficar pronto?',
    a: 'Em até 3 dias úteis a contar do momento em que você preenche o formulário com a logo e as fotos da sua loja.',
  },
  {
    q: 'Consigo alterar preços e cadastrar novos produtos depois?',
    a: 'Sim! Você recebe acesso ao Painel do Lojista para alterar valores, atualizar fotos, ocultar peças esgotadas e adicionar novos produtos de forma simples.',
  },
  {
    q: 'O meu cliente precisa baixar algum aplicativo?',
    a: 'Não. O catálogo abre instantaneamente no navegador de qualquer celular (Android ou iPhone) com carregamento ultra rápido.',
  },
  {
    q: 'Como funciona a garantia?',
    a: 'Você tem 7 dias de garantia incondicional assegurada pela Kiwify. Se por qualquer motivo você achar que não é para o seu negócio, solicita o reembolso e recebe 100% do seu dinheiro de volta.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <Accordion className="mt-10 w-full space-y-3">
          {FAQS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-5 last:border-b"
            >
              <AccordionTrigger className="text-left text-base font-bold text-card-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
