const COMPARISON_ROWS = [
  ['Custo de Licença', 'R$ 397,00 (Pagamento Único)', 'Mensalidades eternas (R$ 99 a R$ 299/mês)'],
  ['Comissão por Venda', 'ZERO comissão (100% seu)', 'Cobram porcentagem sobre cada pedido'],
  ['Montagem Inicial', 'Entregamos pronta em até 3 dias', 'Você precisa cadastrar tudo sozinha do zero'],
  ['Navegação do Cliente', 'Abre direto no celular sem baixar app', 'Exige cadastros longos, senhas e downloads'],
  ['Envio de Pedidos', 'Chega limpo e formatado no WhatsApp', 'Notificações soltas em painel complexo'],
  ['Instabilidade em Datas', 'Servidores de alta velocidade para picos', 'Lojas lentas ou fora do ar na Black Friday'],
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
            Por que o Evolux Catálogo é a escolha certa para sua loja?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Veja a diferença entre ter sua própria vitrine digital vs alugar espaço em plataformas tradicionais.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-3xl border border-border bg-card shadow-soft">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="bg-secondary/60">
                <th className="px-5 py-4 text-sm font-bold text-foreground">Funcionalidade / Benefício</th>
                <th className="px-5 py-4 text-sm font-bold text-brand">Evolux Catálogo</th>
                <th className="px-5 py-4 text-sm font-bold text-muted-foreground">Plataformas Tradicionais</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map(([feature, evolux, traditional]) => (
                <tr key={feature} className="border-t border-border">
                  <th className="px-5 py-4 text-sm font-bold text-foreground">{feature}</th>
                  <td className="px-5 py-4 text-sm font-semibold text-brand-dark">{evolux}</td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">{traditional}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
