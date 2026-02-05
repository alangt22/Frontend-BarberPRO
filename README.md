# BarberDev Frontend 💇‍♂️

Aplicação web moderna desenvolvida em Next.js para o sistema de gerenciamento de barbearias.

## 📋 Sumário

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Executando a Aplicação](#-executando-a-aplicação)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Componentes](#-componentes)
- [Páginas](#-páginas)
- [Estilo e Design](#-estilo-e-design)
- [Deploy](#-deploy)
- [Documentação do Backend](#-documentação-do-backend)

## 🎯 Visão Geral

Interface moderna e intuitiva que permite aos barbeiros gerenciar seu negócio de forma simples e eficiente. Construída com Next.js 16 e Chakra UI, oferece experiência otimizada tanto em desktop quanto mobile.

## ✨ Funcionalidades

### 🏠 Dashboard Principal
- Visão geral dos métricas do negócio
- Acesso rápido às funcionalidades principais
- Indicadores de performance em tempo real
- Interface limpa e organizada

### 👤 Gestão de Perfil
- Visualização e edição de dados pessoais
- Upload de foto de perfil
- Atualização de informações de contato
- Histórico de atividades

### 💈 Gestão de Cortes
- Cadastro de novos modelos de cortes
- Definição de preços e descrições
- Status ativo/inativo para cada corte
- Visualização em grid responsivo
- Edição rápida inline

### 📅 Sistema de Agendamentos
- Visualização completa da agenda
- Criação de novos agendamentos
- Filtros por data e cliente
- Finalização com um clique
- Histórico de serviços realizados

### 💎 Planos e Assinaturas
- Visualização de planos disponíveis
- Upgrade/downgrade de assinatura
- Integração segura com Stripe
- Portal do cliente para gestão
- Status de pagamento em tempo real

### 🎨 Interface Responsiva
- Design adaptável para todos os dispositivos
- Navegação por sidebar collapse
- Modo dark/light (planejado)
- Animações suaves com Framer Motion
- Estados de loading interativos

## 🛠 Tecnologias Utilizadas

- **Next.js 16** - Framework React com SSR/SSG
- **React 19** - Biblioteca de UI moderna
- **TypeScript** - Tipagem estática e segurança
- **Chakra UI** - Sistema de componentes acessível
- **Framer Motion** - Biblioteca de animações
- **Axios** - Cliente HTTP para chamadas de API
- **React Icons** - Biblioteca de ícones populares
- **Nookies** - Gestão de cookies SSR-friendly
- **ESLint** - Linting e código limpo

## 📁 Estrutura do Projeto

```
frontend2/
├── src/
│   ├── pages/                   # Páginas Next.js
│   │   ├── _app.tsx            # Configuração da aplicação
│   │   ├── _document.tsx       # Estrutura HTML
│   │   ├── index.tsx           # Dashboard principal
│   │   ├── login/              # Autenticação
│   │   ├── register/           # Cadastro
│   │   ├── profile/            # Perfil do usuário
│   │   ├── planos/             # Planos de assinatura
│   │   ├── dashboard/          # Painel de controle
│   │   ├── new/                # Criar novo corte
│   │   └── haircuts/           # Gestão de cortes
│   │       ├── index.tsx       # Listagem de cortes
│   │       ├── new/            # Novo corte
│   │       └── [id].tsx        # Detalhes do corte
│   ├── components/              # Componentes reutilizáveis
│   │   ├── sidebar/            # Menu lateral
│   │   │   └── index.tsx       # Navegação principal
│   │   ├── modal/              # Modal genérico
│   │   │   └── index.tsx       # Reutilizável
│   │   └── loadingButton/      # Botão com loading
│   │       └── index.tsx       # Estado interativo
│   ├── context/                # Contextos React
│   │   └── AuthContext.tsx     # Gestão de autenticação
│   └── styles/                 # Estilos globais (se necessário)
├── public/                     # Arquivos estáticos
├── package.json
├── next.config.js
├── tsconfig.json
└── .env.local                  # Variáveis de ambiente
```

## 🔧 Pré-requisitos

- **Node.js** 18+ instalado
- **Backend** BarberDev rodando localmente
- **Conta Stripe** configurada no backend
- **npm** ou **yarn** para gerenciamento de pacotes

## 🚀 Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/alangt22/Frontend-BarberPRO
cd barberdev/frontend2
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Verifique se o backend está rodando:**
```bash
# A API deve estar em http://localhost:3333
curl http://localhost:3333
```

## ⚙️ Configuração

1. **Crie o arquivo `.env.local`:**
```env
# API Backend
NEXT_API_URL=http://localhost:3333

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=...
```

2. **Configure o contexto de autenticação:**
O AuthContext cuida automaticamente do gerenciamento de tokens e estado do usuário.

## 🏃‍♂️ Executando a Aplicação

### Modo Desenvolvimento
```bash
npm run dev
```
Aplicação disponível em `http://localhost:3000`

### Modo Produção
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 🔐 Variáveis de Ambiente

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `NEXT_API_URL` | URL da API backend | `http://localhost:3333` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Chave pública Stripe | `pk_test_...` |

## 🧩 Componentes Principais

### Sidebar Component
```typescript
interface SidebarProps {
  // Menu de navegação responsivo
  // Collapse em mobile
  // Highlight página ativa
}
```

### Modal Component
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}
```

### LoadingButton Component
```typescript
interface LoadingButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
  // Estados interativos
}
```

## 📄 Páginas da Aplicação

### `/` - Dashboard Principal
- Métricas em cards
- Gráficos de crescimento
- Acesso rápido às funcionalidades

### `/login` - Autenticação
- Formulário de login
- Validação em tempo real
- Redirecionamento após login

### `/register` - Cadastro
- Formulário de registro
- Validação de e-mail
- Redirect para dashboard

### `/profile` - Perfil do Usuário
- Edição de dados pessoais
- Atualização de senha
- Informações da assinatura

### `/planos` - Planos de Assinatura
- Comparação de planos
- Upgrade com Stripe
- Status atual

### `/haircuts` - Gestão de Cortes
- Listagem em grid
- Filtros e busca
- Actions inline

### `/haircuts/new` - Novo Corte
- Formulário completo
- Preview em tempo real
- Validação de preços

## 🎨 Estilo e Design

### Chakra UI Setup
- Provider configurado globalmente
- Tema customizado (se aplicável)
- Breakpoints responsivos
- Sistema de cores consistente

### Animações com Framer Motion
- Transições de página
- Animações de entrada/saída
- Micro-interações
- Loading states

### Sistema de Cores
```typescript
// Paleta principal
{
  primary: "#blue.500",
  secondary: "#gray.600",
  accent: "#purple.500",
  success: "#green.500",
  error: "#red.500"
}
```

### Design Responsivo
- Mobile-first approach
- Breakpoints: sm (480px), md (768px), lg (992px), xl (1280px)
- Sidebar collapse em mobile
- Grid adaptável

## 🔗 Integração com API

### Exemplo de chamada com Axios
```typescript
import { api } from '../services/api';

// Criar novo corte
const createHaircut = async (data: HaircutData) => {
  const response = await api.post('/haircut', data);
  return response.data;
};

// Listar agendamentos
const getSchedules = async () => {
  const response = await api.get('/schedules');
  return response.data;
};
```

### Gerenciamento de Autenticação
```typescript
// AuthContext gerencia automaticamente
const { user, signOut } = useAuth();

// Headers incluem token automaticamente
api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
```


## 📖 Documentação do Backend

Para entender melhor a API que este frontend consome, consulte a documentação completa do backend:
**[🔧 Backend Documentation →](https://github.com/alangt22/Backend-BarberPRO)**

---

**Frontend desenvolvido com UX/UI moderna, performance e acessibilidade em mente** 🎨