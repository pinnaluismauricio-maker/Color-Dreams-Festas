# Color Dreams Festas Criativas — Site Institucional

Site institucional em React + TypeScript + Vite para a **Color Dreams Festas
Criativas**, empresa de decoração para festas de aniversário, chá revelação e
aniversário de casamento (São João de Meriti - RJ).

## Como rodar o projeto

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/
    Header/        cabeçalho fixo, menu e CTA de WhatsApp
    Hero/           seção inicial
    About/          "Sobre a Color Dreams"
    Services/       cards de tipos de evento
    Differentials/  diferenciais da empresa
    Gallery/        galeria com filtros por categoria
    ContactCTA/      chamada para orçamento pelo WhatsApp
    Location/       endereço + mapa
    Instagram/      chamada para seguir no Instagram
    Footer/         rodapé
    WhatsAppFloat/  botão flutuante de WhatsApp
  data/content.ts   dados centrais (WhatsApp, Instagram, endereço, textos)
  index.css         tokens de design (cores, tipografia) e utilitários
```

## Adicionando fotos reais

Ainda não há fotos profissionais da empresa. Os espaços reservados
(`media-placeholder`) na Hero, na seção Sobre e na Galeria estão prontos para
receber imagens reais — veja `public/LEIA-ME-IMAGENS.md` para as instruções.

## Personalização

Todos os dados de contato (WhatsApp, Instagram, endereço) ficam centralizados
em `src/data/content.ts` — basta editar esse arquivo para atualizar o site
inteiro.
