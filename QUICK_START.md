# ⚡ Quick Start - CMOI Landing Page

## 🚀 Começar Agora

```bash
cd /Users/ozielsilva/projects/cmoi
npm run dev
```

Acesse: **http://localhost:3000**

---

## 📁 Estrutura Rápida

```
cmoi/
├── app/components/          ← 14 componentes prontos
├── app/page.tsx            ← Página principal (todos os componentes)
├── app/layout.tsx          ← SEO + metadata
├── DEV/                    ← Documentação completa
└── DEPLOYMENT_CHECKLIST.md ← Deploy pronto
```

---

## 🎯 Editar Conteúdo

### Alterar Texto
- **Clínica**: `app/layout.tsx` (nome, SEO)
- **Especialidades**: `app/components/Specialties.tsx`
- **FAQ**: `app/components/FAQ.tsx`
- **Contato**: `app/components/Contact.tsx`

### Alterar Cores
- Arquivo: `tailwind.config.ts` ou use classes Tailwind
- Cores atuais: Lilás/Roxo (#7e22ce), Verde (#22c55e)

### Alterar Imagens
- Substitua URLs Unsplash por suas imagens
- Organize em `/public/placeholders/`
- Use `next/image` para otimização

### Alterar Telefone/WhatsApp
```
Buscar por: (69) 3222-4886 e (69) 99315-7554
Substituir por: seus números
```

---

## 🏗️ Build & Deploy

### Build Produção
```bash
npm run build
```

Output: `.next/`

### Deploy Vercel (Recomendado)
1. Criar repo no GitHub
2. Ir para https://vercel.com/new
3. Conectar repo
4. Deploy automático pronto

### Deploy Netlify
```bash
npm run build
# Deploy da pasta `.next/` para Netlify
```

### Deploy Manual
```bash
npm run build
# Copiar `.next/` + `public/` para seu servidor
# Executar: npm start
```

---

## 🔧 Customização Comum

### Adicionar Mais Especialidades
Edite `app/components/Specialties.tsx`:
```typescript
{
  id: 'new-service',
  icon: Heart, // ícone do Lucide
  title: 'Novo Serviço',
  description: 'Descrição',
  benefits: ['Benefício 1', 'Benefício 2'],
  image: 'https://...',
}
```

### Adicionar Mais Depoimentos
Edite `app/components/Testimonials.tsx`:
```typescript
{
  name: 'Novo Paciente',
  rating: 5,
  text: 'Depoimento...',
  image: 'https://...',
}
```

### Adicionar Mais CTAs
Busque por `whatsappUrl` ou `phoneUrl` e adicione novos componentes

### Mudar Favicon
Substitua `/public/favicon.ico`

---

## 🔍 Verificações

```bash
# Verificar erros TypeScript
npx tsc --noEmit

# Verificar build
npm run build

# Verificar ESLint
npx eslint app/

# Verificar performance
# Abrir DevTools > Lighthouse no navegador
```

---

## 📞 Contato

**Telefone:** (69) 3222-4886  
**WhatsApp:** (69) 99315-7554  
**Localização:** Porto Velho, RO

---

## 📚 Documentação Completa

Veja `DEV/` para documentação detalhada:
- `README.md` - Visão geral
- `ARCHITECTURE.md` - Decisões técnicas
- `HANDOFF.md` - Status + próximos passos
- `SPECS/ACTIVE.md` - Especificações

---

## 🎨 Componentes Disponíveis

- Header (menu + navegação)
- Hero (banner principal)
- TrustBar (badges)
- Specialties (cards de serviços)
- Differentials (diferenciais)
- HowItWorks (processo)
- Gallery (fotos)
- Testimonials (depoimentos)
- Convenios (convênios)
- FAQ (perguntas)
- CTAFinal (CTA grande)
- Contact (contato)
- Footer (rodapé)
- FloatingCTA (botões flutuantes)

Todos importados em `app/page.tsx`

---

## ✅ Pronto!

A landing page está **100% funcional** e pronta para:
- ✅ Desenvolvimento local
- ✅ Customização
- ✅ Deploy em produção

**Próximo passo:** Fazer deploy! 🚀
