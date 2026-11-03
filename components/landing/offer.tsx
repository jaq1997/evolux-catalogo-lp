import { ArrowRight, Check, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CHECKOUT_URL } from '@/lib/site'

const INCLUDED = [
  'Montagem assistida da vitrine entregue em até 3 dias úteis',
  'Cadastro inicial das suas categorias e produtos',
  'Suporte a variações de tamanho (P, M, G, GG e calçados)',
  'Painel Administrativo do Lojista para alterar preços, ocultar itens e cadastrar novas peças quando quiser',
  'Link exclusivo para a bio do Instagram e envio direto no WhatsApp',
  'Acesso vitalício sem mensalidades nem taxas recorrentes',
]

export function Offer() {
  return (
    <section id="oferta" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-brand-dark text-brand-foreground shadow-lift">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                Sua loja pronta para vender mais nesta Black Friday
              </h2>

              <div className="mt-6 flex items-end gap-3">
                <span className="text-lg font-medium text-brand-foreground/60 line-through">R$ 1.000,00</span>
                <span className="text-5xl font-black leading-none">R$ 397,00</span>
              </div>
              <p className="mt-2 text-sm font-medium text-brand-foreground/80">À vista no Pix ou em até 12x no cartão</p>

              <Button
                size="lg"
                render={<a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" />}
                className="mt-8 h-12 w-full px-6 text-base bg-brand-foreground font-extrabold text-brand-dark hover:bg-brand-soft sm:w-auto shadow-lift transition-transform hover:-translate-y-0.5"
              >
                [ GARANTIR MINHA VITRINE COM R$ 603 DE DESCONTO ]
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-brand-foreground/10 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-wide text-brand-foreground/70">
                  O que está incluso
                </p>
                <ul className="mt-4 space-y-3">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-foreground text-brand-dark">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span className="font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bloco de Garantia Kiwify */}
              <div className="flex items-start gap-4 rounded-2xl border border-brand-foreground/20 bg-brand-foreground/10 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-foreground">Garantia Incondicional de 7 Dias</h4>
                  <p className="mt-1 text-xs leading-relaxed text-brand-foreground/80">
                    Teste à vontade. Se por qualquer motivo não gostar, solicite 100% do seu dinheiro de volta direto pela Kiwify.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
