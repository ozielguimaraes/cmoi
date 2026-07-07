# ARCHITECTURE - CMOI Landing Page

## Decisões Arquiteturais

### Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + PostCSS
- **Components:** shadcn/ui ready
- **Icons:** Lucide React
- **Animations:** Framer Motion (minimal, scroll reveals)
- **Image Optimization:** next/image

### Filosofia de Design

**Cliente-Primeiro (Client Components)**
- Componentes interativos usam `'use client'`
- Scroll detection (Header, FloatingCTA)
- Estado local (FAQ accordion, testimonials carousel)
- Hover effects e microinterações

**Servidor-First (Server Components)**
- Componentes estáticos (Hero, Specialties, Footer)
- Metadata e SEO configurado no layout raiz
- Reduz bundle size para JavaScript desnecessário

### Estrutura de Componentes

```
components/
├── Header.tsx              # Navegação fixa (client)
├── Hero.tsx                # Banner principal
├── TrustBar.tsx            # Indicadores de confiança
├── Specialties.tsx         # 9 cards de especialidades (client)
├── Differentials.tsx       # 8 motivos para escolher
├── HowItWorks.tsx          # 4 passos do processo
├── Gallery.tsx             # Galeria de 6 fotos
├── Testimonials.tsx        # Carrossel de depoimentos (client)
├── Convenios.tsx           # 3 convênios
├── FAQ.tsx                 # 14 perguntas (client accordion)
├── CTAFinal.tsx            # CTA de conversão
├── Contact.tsx             # Contato com mapa
├── Footer.tsx              # Rodapé
└── FloatingCTA.tsx         # Botões flutuantes (client)
```

### Estratégia de Conversão

**CTAs Estratégicos em:**
1. Header - Botão WhatsApp/Telefone
2. Hero - 2 botões principais
3. Cada especialidade - "Agendar Avaliação"
4. CTA Final - 2 botões grandes
5. Contact - WhatsApp, Telefone, Mapa
6. FloatingCTA - Botões flutuantes (desktop: 2, mobile: 1)

**Links Configurados:**
- WhatsApp: `https://wa.me/5569993157554?text=Olá! Gostaria de agendar uma consulta.`
- Telefone: `tel:+55693222-4886`

### SEO & Metadata

**Arquivo:** `app/layout.tsx`

Implementado:
- Title e description otimizados
- Keywords distribuídas naturalmente
- Open Graph (OG) para compartilhamento
- Twitter Cards
- JSON-LD (schema.org/MedicalClinic)
- Canonical URL
- Robots meta tags
- Alternates para futuras localizações

### Performance

**Otimizações:**
- Next.js 15 com automatic code splitting
- next/image para lazy loading e WebP
- Font optimization (Geist)
- CSS inlining automático
- Metadata API (sem Next.js Head overhead)

**Targets:**
- Lighthouse: 100 em tudo
- Core Web Vitals: Green
- Mobile: Perfect score

### Acessibilidade (WCAG AA)

- [x] Contraste adequado em todas as cores
- [x] ARIA labels em ícones e botões
- [x] Alt text em todas as imagens
- [x] Navegação por teclado
- [x] Semântica HTML correta
- [x] Links com propósito claro
- [x] Formulários com labels

### Responsividade

**Breakpoints (Tailwind):**
- `base` - Mobile (0px)
- `sm` - Small (640px)
- `md` - Medium (768px)
- `lg` - Large (1024px)
- `xl` - Extra Large (1280px)

**Estratégia:** Mobile-first, progressivamente melhorada

### Imagens & Assets

**Placeholders:**
- Unsplash (gratuito, premium)
- Organized: `/public/placeholders/`
- Format: WebP quando possível
- Lazy loading automático

**Naming Convention:**
```
hero.webp
dentist.webp
dermatologist.webp
reception.webp
clinic.webp
equipment.webp
team.webp
gallery-01.webp
...
```

### Cores (Paleta)

```css
primary: #ffffff (branco)
secondary: #a78bfa / #c084fc (lilás suave)
accent: #7e22ce / #6b21a8 (roxo institucional)
cta: #22c55e (verde)
neutral: #f3f4f6 / #9ca3af (cinza)
```

### Tipografia

- Font: Geist (modern, legível)
- Hierarchy:
  - h1: 3xl-6xl bold (títulos)
  - h2: 2xl-4xl bold (seções)
  - h3: lg-xl bold (subtítulos)
  - body: base-lg regular (conteúdo)

## Futuras Melhorias

### Sistema de Agendamento (Postgres)
```sql
users (id, email, phone, name)
appointments (id, user_id, service_id, datetime, status)
services (id, name, duration, price)
```

### Analytics
- Google Analytics 4
- Funnels de conversão
- Heatmaps (Hotjar)
- Event tracking

### Depoimentos Dinâmicos
- Admin panel para gerenciar
- Integração com Google Reviews
- Testimonials no Postgres

### SEO Avançado
- Sitemap dinâmico
- Robots.txt
- Breadcrumb Schema
- Local Business schema completo

---

**Última Atualização:** 2026-07-07  
**Status:** ✅ Estável
