"use client";

import { useEffect, useState } from "react";


export default function Page() {
  return (
    <>
      <div hidden />
      <div className={"min-h-screen \x62g-background"}>
        <ImportedHeader />
        <main>
          <ImportedSectionSuaVitrineDigitalPronta />
          <ImportedSectionComoFuncionaOSeu />
          <ImportedSectionPorQueOEvolux />
          <ImportedSectionSuaLojaProntaPara />
          <ImportedSectionPerguntasFrequentes />
        </main>
        <ImportedFooter />
      </div>
    </>
  );
}

function ImportedHeader() {
  return (
    <header className={"fixed \x69nset-x-0 top-0 z-50 \x62order-b \x62order-transparent \x62g-background/\x395 \x62ackdrop-blur transition-shadow"} data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"border-border\",\"shadow-sm\"],\"removed\":[\"border-transparent\"],\"threshold\":648},\"mobile\":{\"added\":[\"border-border\",\"shadow-sm\"],\"removed\":[\"border-transparent\"],\"threshold\":633}}"}>
      <BlackFridayBar />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a className="flex items-center gap-2" href="#top">
          <span className={"flex h-9 w-9 items-center justify-center rounded-lg \x62g-brand text-brand-foreground"}>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 10a4 4 0 0 1-8 0" />
              <path d="M3.103 6.034h17.794" />
              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
            </svg>
          </span>
          <span className="text-lg font-extrabold tracking-tight text-foreground">Evolux <span className="text-brand">Catálogo</span></span>
        </a>
        <nav className={"hidden items-center gap-8 \x6dd:\x66lex"} aria-label="Navegação principal">
          <a className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" href="#como-funciona">Como funciona</a>
          <a className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" href="#comparativo">Comparativo</a>
          <a className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" href="#oferta">Oferta &amp; Garantia</a>
        </nav>
        <div className={"hidden \x6dd:\x62lock"}>
          <a className={"inline-flex shrink-0 items-center justify-center rounded-lg \x62order \x62order-transparent bg-clip-padding text-sm whitespace-nowrap \x6futline-none select-none \x66ocus-visible:\x62order-ring \x66ocus-visible:\x72ing-3 \x66ocus-visible:\x72ing-ring/\x350 \x61ctive:\x6eot-aria-[\x68aspopup]:\x74ranslate-y-px \x64isabled:\x70ointer-events-none disabled:opacity-50 \x61ria-invalid:\x62order-destructive \x61ria-invalid:\x72ing-3 \x61ria-invalid:\x72ing-destructive/\x320 \x64ark:\x61ria-invalid:\x62order-destructive/\x350 \x64ark:\x61ria-invalid:\x72ing-destructive/\x340 [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73hrink-0 [&\x5fsvg:\x6eot([\x63lass*='\x73ize-'])]:\x73ize-4 [\x61]:\x68over:\x62g-primary/\x380 h-9 gap-1.5 px-2.5 \x68as-data-[\x69con=\x69nline-end]:\x70r-2 \x68as-data-[\x69con=\x69nline-start]:\x70l-2 \x62g-brand font-semibold text-brand-foreground \x68over:\x62g-brand-dark transition-transform \x68over:\x2dtranslate-y-0.\x35"} href="https://pay.kiwify.com.br/LpeazzP" rel="noopener noreferrer" role="button" tabIndex={0} target="_blank">Quero meu catálogo</a>
        </div>
        <button className={"inline-flex h-10 w-10 items-center justify-center rounded-lg \x62order \x62order-border text-foreground \x6dd:\x68idden"} type="button" aria-label="Abrir menu" aria-expanded="false">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function ImportedSectionSuaVitrineDigitalPronta() {
  return (
    <section className="relative overflow-hidden pt-36 sm:pt-40" id="top">
      <div className={"pointer-events-none absolute \x69nset-x-0 top-0 -z-10 h-[420px] \x62g-brand-soft/\x360"} aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-1 py-1 pr-3 text-xs font-semibold text-brand-dark"><span className="bf-tag rounded-full px-2 py-0.5 font-black tracking-widest">BLACK FRIDAY</span>VAGAS LIMITADAS DE MONTAGEM</span>
          <h1 className="mt-5 text-balance text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">Sua Vitrine Digital Pronta em Até 3 Dias Úteis. Sem Mensalidades.</h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">Chega de perder tempo enviando fotos soltas e preços no WhatsApp. Nossa equipe entrega seu catálogo profissional pronto com fotos, categorias e tamanhos (P, M, G, GG) para você receber pedidos organizados em 1 clique.</p>
          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Preço de Black Friday</p>
            <span className="mt-1 block text-4xl font-black text-brand sm:text-5xl">12x de R$ 41,06</span>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">À vista no Pix R$ 397,00 · ou parcelado no cartão · pagamento único</p>
          </div>
          <div className="mt-6">
            <a className={"bf-glow inline-flex shrink-0 items-center justify-center rounded-lg \x62order \x62order-transparent bg-clip-padding whitespace-normal text-center sm:whitespace-nowrap \x6futline-none select-none \x66ocus-visible:\x62order-ring \x66ocus-visible:\x72ing-3 \x66ocus-visible:\x72ing-ring/\x350 \x61ctive:\x6eot-aria-[\x68aspopup]:\x74ranslate-y-px \x64isabled:\x70ointer-events-none disabled:opacity-50 \x61ria-invalid:\x62order-destructive \x61ria-invalid:\x72ing-3 \x61ria-invalid:\x72ing-destructive/\x320 \x64ark:\x61ria-invalid:\x62order-destructive/\x350 \x64ark:\x61ria-invalid:\x72ing-destructive/\x340 [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73hrink-0 [&\x5fsvg:\x6eot([\x63lass*='\x73ize-'])]:\x73ize-4 [\x61]:\x68over:\x62g-primary/\x380 gap-1.5 \x68as-data-[\x69con=\x69nline-end]:\x70r-2 \x68as-data-[\x69con=\x69nline-start]:\x70l-2 h-auto min-h-12 py-3 sm:h-12 px-6 text-base \x62g-brand font-semibold text-brand-foreground \x68over:\x62g-brand-dark transition-transform \x68over:\x2dtranslate-y-0.\x35"} href="https://pay.kiwify.com.br/LpeazzP" rel="noopener noreferrer" role="button" tabIndex={0} target="_blank">QUERO MINHA VITRINE PRONTA POR 12X DE R$ 41,06<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          </div>
          <p className="mt-4 text-xs font-semibold text-muted-foreground flex items-center gap-2"><span className={"inline-block h-2 w-2 rounded-full bg-emerald-500 \x61nimate-pulse"} />Garantia incondicional de 7 dias · Reembolso 100% garantido pela Kiwify</p>
        </div>
        <div className="relative hidden lg:block">
          <div className={"absolute -inset-4 -z-10 rounded-[2.5rem] \x62g-brand-soft/\x370 sm:-inset-8"} aria-hidden="true" />
          <div className={"mx-auto w-full max-w-[230px] rounded-[2rem] \x62order \x62order-border \x62g-foreground p-1.5 \x73hadow-2xl \x73hadow-brand/\x320 sm:max-w-[300px] sm:rounded-[2.25rem] sm:p-2"}>
            <div className={"relative overflow-hidden rounded-[1.75rem] \x62g-background aspect-[9/18.5] flex items-center justify-center"}>
              <img className="h-full w-full object-contain rounded-[1.75rem]" src="/loja-roupas.gif" alt="Demonstração da Vitrine Digital - Loja de Roupas" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionComoFuncionaOSeu() {
  return (
    <section className={"\x73croll-mt-20 py-20 sm:py-24"} id="como-funciona">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className={"inline-flex items-center rounded-full \x62g-brand-soft px-3 py-1 text-xs font-bold text-brand-dark"}>Simplicidade na conversão</span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Como funciona o seu cadastro assistido em 4 passos</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article className={"relative overflow-hidden rounded-3xl \x62order \x62order-border \x62g-card p-6 transition-transform \x68over:\x2dtranslate-y-1 sm:p-8"}>
            <div className="flex items-center justify-between">
              <span className={"flex h-12 w-12 items-center justify-center rounded-2xl \x62g-brand-soft text-brand"}>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </span>
              <span className={"font-mono text-2xl font-black \x74ext-brand/\x330"}>01</span>
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground">1. Garanta sua vaga na fila de montagem</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Faça o pagamento único de R$ 397,00 (em até 12x no cartão ou via Pix com aprovação imediata).</p>
          </article>
          <article className={"relative overflow-hidden rounded-3xl \x62order \x62order-border \x62g-card p-6 transition-transform \x68over:\x2dtranslate-y-1 sm:p-8"}>
            <div className="flex items-center justify-between">
              <span className={"flex h-12 w-12 items-center justify-center rounded-2xl \x62g-brand-soft text-brand"}>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v12" />
                  <path d="m17 8-5-5-5 5" />
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                </svg>
              </span>
              <span className={"font-mono text-2xl font-black \x74ext-brand/\x330"}>02</span>
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground">2. Envie os materiais da sua loja</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Logo após a compra, você responde ao nosso formulário simples enviando sua logo, categorias e fotos dos produtos.</p>
          </article>
          <article className={"relative overflow-hidden rounded-3xl \x62order \x62order-border \x62g-card p-6 transition-transform \x68over:\x2dtranslate-y-1 sm:p-8"}>
            <div className="flex items-center justify-between">
              <span className={"flex h-12 w-12 items-center justify-center rounded-2xl \x62g-brand-soft text-brand"}>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                </svg>
              </span>
              <span className={"font-mono text-2xl font-black \x74ext-brand/\x330"}>03</span>
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground">3. Nossa equipe monta tudo para você</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Criamos sua vitrine personalizada, organizamos o visual da loja e cadastramos seus produtos com variações de tamanho (P, M, G, GG) e cor.</p>
          </article>
          <article className={"relative overflow-hidden rounded-3xl \x62order \x62order-border \x62g-card p-6 transition-transform \x68over:\x2dtranslate-y-1 sm:p-8"}>
            <div className="flex items-center justify-between">
              <span className={"flex h-12 w-12 items-center justify-center rounded-2xl \x62g-brand-soft text-brand"}>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </span>
              <span className={"font-mono text-2xl font-black \x74ext-brand/\x330"}>04</span>
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground">4. Receba seu link pronto para vender</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Em até 3 dias úteis, entregamos seu link exclusivo para você colocar na bio do Instagram e receber pedidos formatados direto no seu WhatsApp.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionPorQueOEvolux() {
  return (
    <section className={"\x73croll-mt-20 py-20 sm:py-24"} id="comparativo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className={"inline-flex items-center rounded-full \x62g-brand-soft px-3 py-1 text-xs font-bold text-brand-dark"}>Comparativo de Mercado</span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Por que o Evolux Catálogo é a escolha certa para sua loja?</h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">Veja a diferença entre ter sua própria vitrine digital vs alugar espaço em plataformas tradicionais.</p>
        </div>
        <div className={"mt-12 overflow-x-auto rounded-3xl \x62order \x62order-border \x62g-card"}>
          <table className="comparison-table w-full border-collapse text-left">
            <thead>
              <tr className={"\x62g-secondary/\x360"}>
                <th className="px-5 py-4 text-sm font-bold text-foreground">Funcionalidade / Benefício</th>
                <th className="px-5 py-4 text-sm font-bold text-brand">Evolux Catálogo</th>
                <th className="px-5 py-4 text-sm font-bold text-muted-foreground">Plataformas Tradicionais</th>
              </tr>
            </thead>
            <tbody>
              <tr className={"\x62order-t \x62order-border"}>
                <th className="px-5 py-4 text-sm font-bold text-foreground">Custo de Licença</th>
                <td className="px-5 py-4 text-sm font-semibold text-brand-dark">R$ 397,00 (Pagamento Único)</td>
                <td className="px-5 py-4 text-sm text-muted-foreground">Mensalidades eternas (R$ 99 a R$ 299/mês)</td>
              </tr>
              <tr className={"\x62order-t \x62order-border"}>
                <th className="px-5 py-4 text-sm font-bold text-foreground">Comissão por Venda</th>
                <td className="px-5 py-4 text-sm font-semibold text-brand-dark">ZERO comissão (100% seu)</td>
                <td className="px-5 py-4 text-sm text-muted-foreground">Cobram porcentagem sobre cada pedido</td>
              </tr>
              <tr className={"\x62order-t \x62order-border"}>
                <th className="px-5 py-4 text-sm font-bold text-foreground">Montagem Inicial</th>
                <td className="px-5 py-4 text-sm font-semibold text-brand-dark">Entregamos pronta em até 3 dias</td>
                <td className="px-5 py-4 text-sm text-muted-foreground">Você precisa cadastrar tudo sozinha do zero</td>
              </tr>
              <tr className={"\x62order-t \x62order-border"}>
                <th className="px-5 py-4 text-sm font-bold text-foreground">Navegação do Cliente</th>
                <td className="px-5 py-4 text-sm font-semibold text-brand-dark">Abre direto no celular sem baixar app</td>
                <td className="px-5 py-4 text-sm text-muted-foreground">Exige cadastros longos, senhas e downloads</td>
              </tr>
              <tr className={"\x62order-t \x62order-border"}>
                <th className="px-5 py-4 text-sm font-bold text-foreground">Envio de Pedidos</th>
                <td className="px-5 py-4 text-sm font-semibold text-brand-dark">Chega limpo e formatado no WhatsApp</td>
                <td className="px-5 py-4 text-sm text-muted-foreground">Notificações soltas em painel complexo</td>
              </tr>
              <tr className={"\x62order-t \x62order-border"}>
                <th className="px-5 py-4 text-sm font-bold text-foreground">Instabilidade em Datas</th>
                <td className="px-5 py-4 text-sm font-semibold text-brand-dark">Servidores de alta velocidade para picos</td>
                <td className="px-5 py-4 text-sm text-muted-foreground">Lojas lentas ou fora do ar na Black Friday</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionSuaLojaProntaPara() {
  return (
    <section className={"\x73croll-mt-20 py-20 sm:py-24"} id="oferta">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className={"overflow-hidden rounded-3xl \x62g-brand-dark text-brand-foreground"}>
          <div className={"grid gap-8 p-8 sm:p-12 lg:grid-cols-2 \x6cg:\x69tems-center"}>
            <div>
              <h2 className="text-3xl font-black leading-tight sm:text-4xl">Sua loja pronta para vender mais nesta Black Friday</h2>
              <div className="mt-6">
                <span className={"text-sm font-medium \x74ext-brand-foreground/\x360 line-through"}>R$ 1.000,00</span>
                <span className="mt-1 block text-5xl font-black leading-none">R$ 397,00</span>
              </div>
              <p className={"mt-2 text-sm font-medium \x74ext-brand-foreground/\x380"}>À vista no Pix ou em até 12x no cartão</p>
            </div>
            <div className={"\x73pace-y-6"}>
              <div className={"rounded-2xl \x62g-brand-foreground/\x310 p-6 sm:p-8"}>
                <p className={"text-xs font-bold uppercase tracking-wide \x74ext-brand-foreground/\x370"}>O que está incluso</p>
                <ul className={"mt-4 \x73pace-y-3"}>
                  <li className="flex items-start gap-3 text-sm">
                    <span className={"mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full \x62g-brand-foreground text-brand-dark"}>
                      <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="font-medium leading-snug">Montagem assistida da vitrine entregue em até 3 dias úteis</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className={"mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full \x62g-brand-foreground text-brand-dark"}>
                      <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="font-medium leading-snug">Cadastro inicial das suas categorias e produtos</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className={"mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full \x62g-brand-foreground text-brand-dark"}>
                      <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="font-medium leading-snug">Suporte a variações de tamanho (P, M, G, GG e calçados)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className={"mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full \x62g-brand-foreground text-brand-dark"}>
                      <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="font-medium leading-snug">Painel Administrativo do Lojista para alterar preços, ocultar itens e cadastrar novas peças quando quiser</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className={"mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full \x62g-brand-foreground text-brand-dark"}>
                      <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="font-medium leading-snug">Link exclusivo para a bio do Instagram e envio direto no WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className={"mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full \x62g-brand-foreground text-brand-dark"}>
                      <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="font-medium leading-snug">Acesso vitalício sem mensalidades nem taxas recorrentes</span>
                  </li>
                </ul>
              </div>
              <div className={"flex items-start gap-4 rounded-2xl \x62order \x62order-brand-foreground/\x320 \x62g-brand-foreground/\x310 p-5"}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-foreground">Garantia Incondicional de 7 Dias</h4>
                  <p className={"mt-1 text-xs leading-relaxed \x74ext-brand-foreground/\x380"}>Teste à vontade. Se por qualquer motivo não gostar, solicite 100% do seu dinheiro de volta direto pela Kiwify.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 pb-8 sm:px-12 sm:pb-12">
            <a className="bf-glow inline-flex min-h-12 w-full items-center justify-center rounded-lg px-5 py-3 text-center text-sm font-extrabold leading-tight" href="https://pay.kiwify.com.br/LpeazzP" rel="noopener noreferrer" role="button" tabIndex={0} target="_blank">GARANTIR MINHA VITRINE COM R$ 603 DE DESCONTO</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionPerguntasFrequentes() {
  return (
    <section className={"\x73croll-mt-20 \x62g-secondary py-20 sm:py-24"} id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Perguntas frequentes</h2>
        </div>
        <div className={"flex flex-col mt-10 w-full \x73pace-y-3"} data-orientation="vertical" dir="ltr" role="region">
          <div className={"\x6eot-last:\x62order-b rounded-xl \x62order \x62order-border \x62g-card px-5 \x6cast:\x62order-b"} data-orientation="vertical" data-closed="">
            <h3 className="flex" data-orientation="vertical" data-closed="">
              <button className={"group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg \x62order \x62order-transparent py-2.5 transition-all \x6futline-none \x66ocus-visible:\x62order-ring \x66ocus-visible:\x72ing-3 \x66ocus-visible:\x72ing-ring/\x350 \x66ocus-visible:\x61fter:\x62order-ring \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 **:\x64ata-[\x73lot=\x61ccordion-trigger-icon]:\x6dl-auto **:\x64ata-[\x73lot=\x61ccordion-trigger-icon]:\x73ize-4 **:\x64ata-[\x73lot=\x61ccordion-trigger-icon]:\x74ext-muted-foreground text-left text-base font-bold text-card-foreground \x68over:\x6eo-underline"} type="button" data-orientation="vertical" aria-disabled="false" aria-expanded="false" id="base-ui-_R_rpbrbH2_" tabIndex={0}>O valor de R$ 397 tem alguma cobrança de mensalidade?<svg className={"pointer-events-none shrink-0 \x67roup-aria-expanded/\x61ccordion-trigger:\x68idden"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-slot="accordion-trigger-icon"><path d="m6 9 6 6 6-6" /></svg><svg className={"pointer-events-none hidden shrink-0 \x67roup-aria-expanded/\x61ccordion-trigger:\x69nline"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-slot="accordion-trigger-icon"><path d="m18 15-6-6-6 6" /></svg></button>
            </h3>
          </div>
          <div className={"\x6eot-last:\x62order-b rounded-xl \x62order \x62order-border \x62g-card px-5 \x6cast:\x62order-b"} data-orientation="vertical" data-closed="">
            <h3 className="flex" data-orientation="vertical" data-closed="">
              <button className={"group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg \x62order \x62order-transparent py-2.5 transition-all \x6futline-none \x66ocus-visible:\x62order-ring \x66ocus-visible:\x72ing-3 \x66ocus-visible:\x72ing-ring/\x350 \x66ocus-visible:\x61fter:\x62order-ring \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 **:\x64ata-[\x73lot=\x61ccordion-trigger-icon]:\x6dl-auto **:\x64ata-[\x73lot=\x61ccordion-trigger-icon]:\x73ize-4 **:\x64ata-[\x73lot=\x61ccordion-trigger-icon]:\x74ext-muted-foreground text-left text-base font-bold text-card-foreground \x68over:\x6eo-underline"} type="button" data-orientation="vertical" aria-disabled="false" aria-expanded="false" id="base-ui-_R_1bpbrbH2_" tabIndex={0}>Não entendo de tecnologia, vou conseguir usar?<svg className={"pointer-events-none shrink-0 \x67roup-aria-expanded/\x61ccordion-trigger:\x68idden"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-slot="accordion-trigger-icon"><path d="m6 9 6 6 6-6" /></svg><svg className={"pointer-events-none hidden shrink-0 \x67roup-aria-expanded/\x61ccordion-trigger:\x69nline"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-slot="accordion-trigger-icon"><path d="m18 15-6-6-6 6" /></svg></button>
            </h3>
          </div>
          <div className={"\x6eot-last:\x62order-b rounded-xl \x62order \x62order-border \x62g-card px-5 \x6cast:\x62order-b"} data-orientation="vertical" data-closed="">
            <h3 className="flex" data-orientation="vertical" data-closed="">
              <button className={"group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg \x62order \x62order-transparent py-2.5 transition-all \x6futline-none \x66ocus-visible:\x62order-ring \x66ocus-visible:\x72ing-3 \x66ocus-visible:\x72ing-ring/\x350 \x66ocus-visible:\x61fter:\x62order-ring \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 **:\x64ata-[\x73lot=\x61ccordion-trigger-icon]:\x6dl-auto **:\x64ata-[\x73lot=\x61ccordion-trigger-icon]:\x73ize-4 **:\x64ata-[\x73lot=\x61ccordion-trigger-icon]:\x74ext-muted-foreground text-left text-base font-bold text-card-foreground \x68over:\x6eo-underline"} type="button" data-orientation="vertical" aria-disabled="false" aria-expanded="false" id="base-ui-_R_1rpbrbH2_" tabIndex={0}>Quanto tempo demora para o meu catálogo ficar pronto?<svg className={"pointer-events-none shrink-0 \x67roup-aria-expanded/\x61ccordion-trigger:\x68idden"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-slot="accordion-trigger-icon"><path d="m6 9 6 6 6-6" /></svg><svg className={"pointer-events-none hidden shrink-0 \x67roup-aria-expanded/\x61ccordion-trigger:\x69nline"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-slot="accordion-trigger-icon"><path d="m18 15-6-6-6 6" /></svg></button>
            </h3>
          </div>
          <div className={"\x6eot-last:\x62order-b rounded-xl \x62order \x62order-border \x62g-card px-5 \x6cast:\x62order-b"} data-orientation="vertical" data-closed="">
            <h3 className="flex" data-orientation="vertical" data-closed="">
              <button className={"group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg \x62order \x62order-transparent py-2.5 transition-all \x6futline-none \x66ocus-visible:\x62order-ring \x66ocus-visible:\x72ing-3 \x66ocus-visible:\x72ing-ring/\x350 \x66ocus-visible:\x61fter:\x62order-ring \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 **:\x64ata-[\x73lot=\x61ccordion-trigger-icon]:\x6dl-auto **:\x64ata-[\x73lot=\x61ccordion-trigger-icon]:\x73ize-4 **:\x64ata-[\x73lot=\x61ccordion-trigger-icon]:\x74ext-muted-foreground text-left text-base font-bold text-card-foreground \x68over:\x6eo-underline"} type="button" data-orientation="vertical" aria-disabled="false" aria-expanded="false" id="base-ui-_R_2bpbrbH2_" tabIndex={0}>Consigo alterar preços e cadastrar novos produtos depois?<svg className={"pointer-events-none shrink-0 \x67roup-aria-expanded/\x61ccordion-trigger:\x68idden"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-slot="accordion-trigger-icon"><path d="m6 9 6 6 6-6" /></svg><svg className={"pointer-events-none hidden shrink-0 \x67roup-aria-expanded/\x61ccordion-trigger:\x69nline"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-slot="accordion-trigger-icon"><path d="m18 15-6-6-6 6" /></svg></button>
            </h3>
          </div>
          <div className={"\x6eot-last:\x62order-b rounded-xl \x62order \x62order-border \x62g-card px-5 \x6cast:\x62order-b"} data-orientation="vertical" data-closed="">
            <h3 className="flex" data-orientation="vertical" data-closed="">
              <button className={"group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg \x62order \x62order-transparent py-2.5 transition-all \x6futline-none \x66ocus-visible:\x62order-ring \x66ocus-visible:\x72ing-3 \x66ocus-visible:\x72ing-ring/\x350 \x66ocus-visible:\x61fter:\x62order-ring \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 **:\x64ata-[\x73lot=\x61ccordion-trigger-icon]:\x6dl-auto **:\x64ata-[\x73lot=\x61ccordion-trigger-icon]:\x73ize-4 **:\x64ata-[\x73lot=\x61ccordion-trigger-icon]:\x74ext-muted-foreground text-left text-base font-bold text-card-foreground \x68over:\x6eo-underline"} type="button" data-orientation="vertical" aria-disabled="false" aria-expanded="false" id="base-ui-_R_2rpbrbH2_" tabIndex={0}>O meu cliente precisa baixar algum aplicativo?<svg className={"pointer-events-none shrink-0 \x67roup-aria-expanded/\x61ccordion-trigger:\x68idden"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-slot="accordion-trigger-icon"><path d="m6 9 6 6 6-6" /></svg><svg className={"pointer-events-none hidden shrink-0 \x67roup-aria-expanded/\x61ccordion-trigger:\x69nline"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-slot="accordion-trigger-icon"><path d="m18 15-6-6-6 6" /></svg></button>
            </h3>
          </div>
          <div className={"\x6eot-last:\x62order-b rounded-xl \x62order \x62order-border \x62g-card px-5 \x6cast:\x62order-b"} data-orientation="vertical" data-closed="">
            <h3 className="flex" data-orientation="vertical" data-closed="">
              <button className={"group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg \x62order \x62order-transparent py-2.5 transition-all \x6futline-none \x66ocus-visible:\x62order-ring \x66ocus-visible:\x72ing-3 \x66ocus-visible:\x72ing-ring/\x350 \x66ocus-visible:\x61fter:\x62order-ring \x61ria-disabled:\x70ointer-events-none \x61ria-disabled:\x6fpacity-50 **:\x64ata-[\x73lot=\x61ccordion-trigger-icon]:\x6dl-auto **:\x64ata-[\x73lot=\x61ccordion-trigger-icon]:\x73ize-4 **:\x64ata-[\x73lot=\x61ccordion-trigger-icon]:\x74ext-muted-foreground text-left text-base font-bold text-card-foreground \x68over:\x6eo-underline"} type="button" data-orientation="vertical" aria-disabled="false" aria-expanded="false" id="base-ui-_R_3bpbrbH2_" tabIndex={0}>Como funciona a garantia?<svg className={"pointer-events-none shrink-0 \x67roup-aria-expanded/\x61ccordion-trigger:\x68idden"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-slot="accordion-trigger-icon"><path d="m6 9 6 6 6-6" /></svg><svg className={"pointer-events-none hidden shrink-0 \x67roup-aria-expanded/\x61ccordion-trigger:\x69nline"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-slot="accordion-trigger-icon"><path d="m18 15-6-6-6 6" /></svg></button>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedFooter() {
  return (
    <footer className={"\x62order-t \x62order-border \x62g-background"}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className={"flex flex-col gap-10 \x6dd:\x66lex-row \x6dd:\x69tems-start \x6dd:\x6austify-between"}>
          <div className="max-w-xs">
            <a className="flex items-center gap-2" href="#top">
              <span className={"flex h-9 w-9 items-center justify-center rounded-lg \x62g-brand text-brand-foreground"}>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 10a4 4 0 0 1-8 0" />
                  <path d="M3.103 6.034h17.794" />
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
                </svg>
              </span>
              <span className="text-lg font-extrabold tracking-tight text-foreground">Evolux <span className="text-brand">Catálogo</span></span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Sua vitrine digital com a sua marca, seu domínio e seu controle. Pedidos direto no WhatsApp, sem mensalidade.</p>
          </div>
          <div className={"flex flex-col gap-8 \x73m:\x66lex-row sm:gap-16"}>
            <nav aria-label="Links rápidos">
              <p className="text-sm font-bold text-foreground">Navegação</p>
              <ul className={"mt-4 \x73pace-y-3"}>
                <li>
                  <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#para-quem-e">Para quem é</a>
                </li>
                <li>
                  <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#comparativo">Comparativo</a>
                </li>
                <li>
                  <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="https://pay.kiwify.com.br/LpeazzP">Quero meu catálogo</a>
                </li>
                <li>
                  <a className="text-sm text-muted-foreground transition-colors hover:text-foreground" href="#faq">FAQ</a>
                </li>
              </ul>
            </nav>
            <div>
              <p className="text-sm font-bold text-foreground">Redes sociais</p>
              <div className="mt-4 flex gap-3">
                <a className={"flex h-10 w-10 items-center justify-center rounded-lg \x62order \x62order-border text-muted-foreground transition-colors \x68over:\x62order-brand hover:text-brand"} aria-label="Instagram" href="https://www.instagram.com/souevolux360/" rel="noopener noreferrer" target="_blank">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </a>
                <a className={"flex h-10 w-10 items-center justify-center rounded-lg \x62order \x62order-border text-muted-foreground transition-colors \x68over:\x62order-brand hover:text-brand"} aria-label="WhatsApp" href="https://pay.kiwify.com.br/LpeazzP" rel="noopener noreferrer" target="_blank">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                  </svg>
                </a>
                <a className={"flex h-10 w-10 items-center justify-center rounded-lg \x62order \x62order-border text-muted-foreground transition-colors \x68over:\x62order-brand hover:text-brand"} aria-label="E-mail" href="mailto:contatoevolux360@gmail.com">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={"mt-12 \x62order-t \x62order-border pt-6"}>
          <p className="text-xs text-muted-foreground">Design e desenvolvimento humano, ponta a ponta — <a className={"font-semibold text-foreground underline \x64ecoration-border \x75nderline-offset-2 transition-colors hover:text-brand"} href="https://evolux360.online" rel="noopener noreferrer" target="_blank">Evolux360</a>.</p>
          <p className="mt-2 text-sm text-muted-foreground">© 2026 Evolux360. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}


const BF_DURATION = 10 * 60 * 1000;

function BlackFridayBar() {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const deadline = Date.now() + BF_DURATION;
    const tick = () => setLeft(Math.max(0, deadline - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const parts = left === null ? null : [Math.floor(left / 864e5), Math.floor(left / 36e5) % 24, Math.floor(left / 6e4) % 60, Math.floor(left / 1e3) % 60];
  return (
    <a href="#oferta" className="bf-bar flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-xs font-bold uppercase tracking-wide sm:text-sm">
      <span>Black Friday Evolux — oferta termina em</span>
      <span className="flex gap-1">
        {(parts ?? [0, 0, 0, 0]).map((n, k) => (
          <span key={k} className="bf-digit">{String(n).padStart(2, "0")}{"dhms"[k]}</span>
        ))}
      </span>
    </a>
  );
}
