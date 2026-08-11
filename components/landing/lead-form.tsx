'use client'

import { useState, type FormEvent } from 'react'
import { Check, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SEGMENTS_OPTIONS = [
  { value: 'alimentacao', label: 'Alimentação & Delivery' },
  { value: 'servicos', label: 'Beleza & Serviços' },
  { value: 'turismo', label: 'Turismo & Hospedagem' },
  { value: 'varejo', label: 'Varejo Geral / Loja' },
]

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    // Simula o envio (pronto para enviar para Google Sheet ou backend)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <section id="saber-mais" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-dark">
                Atendimento personalizado
              </span>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Quero saber mais sobre o catálogo
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                Preencha seus dados para receber uma demonstração exclusiva com o catálogo aplicado diretamente ao seu segmento.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  'Demonstração prática em vídeo',
                  'Tire dúvidas sobre seu segmento',
                  'Sem compromisso de compra',
                ].map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/80 bg-background/50 p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-foreground">Solicitação Enviada!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Obrigado pelo seu interesse. Entraremos em contato muito em breve com todos os detalhes do seu catálogo.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar nova resposta
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      id="nome"
                      required
                      placeholder="Ex: Carlos Silva"
                      className="mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm font-medium outline-none transition-focus focus:border-brand focus:ring-2 focus:ring-brand/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      WhatsApp para contato
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      required
                      placeholder="(00) 00000-0000"
                      className="mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm font-medium outline-none transition-focus focus:border-brand focus:ring-2 focus:ring-brand/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="segmento" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Qual é o seu Segmento?
                    </label>
                    <select
                      id="segmento"
                      required
                      className="mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm font-medium outline-none transition-focus focus:border-brand focus:ring-2 focus:ring-brand/20"
                    >
                      {SEGMENTS_OPTIONS.map((seg) => (
                        <option key={seg.value} value={seg.value}>
                          {seg.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="h-12 w-full text-base bg-brand font-bold text-brand-foreground hover:bg-brand-dark shadow-lift mt-2"
                  >
                    {loading ? 'Enviando...' : 'Solicitar informações'}
                    <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
