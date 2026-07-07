# SPEC ATIVA - CMOI Landing Page v1.0

## Escopo Atual

Landing page premium para Centro Médico Odontológico Integrado (CMOI) em Porto Velho, RO.

**Objetivo Principal:** Máxima conversão para agendamentos via WhatsApp e telefone.

## Requisitos

### Conversão
- [x] CTA em praticamente toda seção (12+ CTAs)
- [x] Botões flutuantes WhatsApp (desktop + mobile)
- [x] Links prontos WhatsApp: `wa.me/5569993157554`
- [x] Links prontos Telefone: `tel:+55693222-4886`
- [x] Formulário de contato ou mapa interativo
- [x] Design que transmite confiança

### Conteúdo
- [x] Hero impactante (full-screen, CTA duplo)
- [x] 9 especialidades com descrições
- [x] 8 diferenciais persuasivos
- [x] 4 passos do processo ("Como Funciona")
- [x] 6 fotos da clínica (galeria)
- [x] 4 depoimentos (carrossel)
- [x] 3 convênios
- [x] 14 perguntas FAQ (SEO local)
- [x] Contato com mapa e horários
- [x] Indicadores de confiança (6 items)

### Design & UX
- [x] Elegante, minimalista, moderno, clean
- [x] Paleta: Branco, Lilás/Roxo, Verde (CTA)
- [x] Espaço em branco generoso
- [x] Cards elegantes com sombras suaves
- [x] Bordas arredondadas
- [x] Ícones modernos (Lucide)
- [x] Microinterações leves (hover, scroll)
- [x] Animações discretas

### Responsividade
- [x] Mobile-first
- [x] Celulares (320px+)
- [x] Tablets (768px+)
- [x] Desktop (1024px+)
- [x] Layout quebrado? NÃO

### Performance
- [x] next/image (lazy loading, WebP)
- [x] Code splitting automático
- [x] Font optimization
- [x] Meta Charset, viewport
- [x] Lighthouse Target: 100 tudo

### Acessibilidade (WCAG AA)
- [x] Contraste adequado
- [x] ARIA labels
- [x] Alt text (todas as imagens)
- [x] Navegação por teclado
- [x] Semântica HTML
- [x] Links com propósito claro

### SEO
- [x] Title otimizado (meta keywords)
- [x] Meta description
- [x] Canonical URL
- [x] Robots meta
- [x] Open Graph (OG tags)
- [x] Twitter Cards
- [x] JSON-LD (schema.org)
- [x] Sitemap ready
- [x] Sitemap.xml automático
- [x] Breadcrumb schema
- [x] FAQ schema
- [x] LocalBusiness schema
- [x] Keywords naturais no copy

### Palavras-chave SEO Priorizadas

```
Alto volume / Local:
- dentista Porto Velho
- clínica odontológica Porto Velho
- implante dentário Porto Velho
- prótese dentária Porto Velho
- tratamento de canal Porto Velho
- ortodontista Porto Velho
- dermatologista Porto Velho
- dermatologia Porto Velho
- consulta odontológica Porto Velho
- consulta dermatológica Porto Velho
```

## Componentes Implementados

| Componente | Status | CTAs | Features |
|-----------|--------|------|----------|
| Header | ✅ | WhatsApp, Phone | Menu responsivo, scroll-aware |
| Hero | ✅ | 2 (WhatsApp, Phone) | Full-screen, indicadores confiança |
| TrustBar | ✅ | 0 | 6 ícones de confiabilidade |
| Specialties | ✅ | 9 (Agendar Avaliação) | 9 cards, ícones, hover effects |
| Differentials | ✅ | 0 | 8 motivos, descrições |
| HowItWorks | ✅ | 0 | 4 passos com ícones |
| Gallery | ✅ | 0 | 6 fotos, hover overlay |
| Testimonials | ✅ | 0 | Carrossel, 4 depoimentos, stars |
| Convenios | ✅ | 0 | 3 convênios, info contato |
| FAQ | ✅ | 0 | 14 perguntas, accordion |
| CTAFinal | ✅ | 2 (WhatsApp, Phone) | Grande bloco de conversão |
| Contact | ✅ | 3 (Phone, WhatsApp, Maps) | Mapa, horários, info |
| Footer | ✅ | 2 (Phone, WhatsApp) | Links rápidos, social |
| FloatingCTA | ✅ | 2 (Desktop), 1 (Mobile) | Botões flutuantes |

## Informações da Clínica

```
Nome: Centro Médico Odontológico Integrado
Cidade: Porto Velho, RO
Telefone: (69) 3222-4886
WhatsApp: (69) 99315-7554

Especialidades:
- Implantes Dentários
- Próteses
- Endodontia (Canal)
- Ortodontia
- Dentística
- Clínica Geral
- Dermatologia Clínica
- Dermatologia Cirúrgica
- Pequenos Procedimentos

Convênios:
- CASSI
- FUSEX
- Zequinha Araújo
```

## Critérios de Aceitação

- [x] Não há links quebrados
- [x] Nenhum CTA malformado
- [x] Responsivo (testado em mobile, tablet, desktop)
- [x] Performance aceitável (Lighthouse)
- [x] SEO implementado
- [x] Acessibilidade OK
- [x] TypeScript sem erros
- [x] Build sem warnings críticos

## Próximas Fases (out of scope v1.0)

1. **Imagens Reais** - Substituir placeholders
2. **Analytics** - Google Analytics setup
3. **Agendamento** - Postgres + API
4. **Admin Panel** - Gerenciar depoimentos/horários
5. **Email** - Confirmação de agendamento
6. **WhatsApp Bot** - Respostas automáticas

---

**Status:** ✅ **COMPLETO**  
**Data:** 2026-07-07  
**Versão:** 1.0
