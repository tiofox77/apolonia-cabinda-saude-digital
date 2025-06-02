
# Clínica Apolonia - Documentação Completa das Funcionalidades

## 📋 Visão Geral do Sistema

A Clínica Apolonia possui um website completo com sistema de agendamento e contato que integra com backend para armazenamento de dados e envio de emails.

## 🚀 Funcionalidades Principais

### 1. **Sistema de Agendamento**
- **Localização**: Disponível em todas as páginas (Home, Serviços, Especialidades)
- **Acesso**: Botões "Agendar" no header, footer e seção hero
- **Funcionalidades**:
  - Formulário completo com dados pessoais
  - Seleção de data e horário
  - Escolha de especialidades
  - Observações especiais
  - Validação de campos obrigatórios

### 2. **Sistema de Contato**
- **Localização**: Header, footer e páginas específicas
- **Funcionalidades**:
  - Formulário de contato simples
  - Campos: nome, email, telefone, mensagem
  - Validação automática

### 3. **Modais Dinâmicos**
- **Agendamento Contextual**: Nas páginas de serviços/especialidades, o modal exibe informações do item selecionado
- **Modal de Detalhes**: Botão "Saiba mais" mostra informações detalhadas sobre serviços/especialidades
- **Design Responsivo**: Funciona em desktop e mobile

### 4. **Backend e Armazenamento**
- **Banco de Dados**: Supabase integrado
- **Tabelas**:
  - `appointments`: Armazena agendamentos
  - `contacts`: Armazena mensagens de contato
- **Campos de Agendamento**:
  - ID único
  - Nome completo
  - Email
  - Telefone
  - Data desejada
  - Horário
  - Especialidade/Serviço
  - Observações
  - Timestamp de criação

## 📧 Configuração de Email

### **Credenciais de Acesso**
- **Email**: carlosfox1782@gmail.com
- **Senha**: Admin2017

### **Configuração para Funcionamento**

#### **Opção 1: Configuração com Gmail (Recomendada)**
1. Acesse as configurações do Gmail
2. Ative a "Verificação em duas etapas"
3. Gere uma "Senha de app" para o projeto
4. Configure no Supabase Edge Functions:

```javascript
// Edge Function para envio de emails
const emailData = {
  to: 'carlosfox1782@gmail.com',
  from: 'noreply@clinicaapolonia.com',
  subject: 'Nova Solicitação - Clínica Apolonia',
  html: `
    <h2>Nova Solicitação Recebida</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    <p><strong>Data:</strong> ${data}</p>
    <p><strong>Horário:</strong> ${horario}</p>
    <p><strong>Mensagem:</strong> ${mensagem}</p>
  `
};
```

#### **Opção 2: Configuração com SendGrid**
1. Crie conta no SendGrid
2. Obtenha API Key
3. Configure domain verification
4. Implemente via Edge Functions

#### **Opção 3: Configuração com Resend (Mais Simples)**
1. Crie conta no Resend
2. Obtenha API Key
3. Configure domain (ou use domínio de teste)
4. Integre via Edge Functions

## 🔧 Configuração Técnica

### **Variáveis de Ambiente (Supabase Secrets)**
```
EMAIL_SERVICE_API_KEY=sua_api_key_aqui
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=carlosfox1782@gmail.com
SMTP_PASS=sua_senha_de_app_aqui
```

### **Edge Function de Exemplo**
```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const { name, email, phone, message, type, service } = await req.json()
  
  // Salvar no banco
  const { data, error } = await supabase
    .from(type === 'schedule' ? 'appointments' : 'contacts')
    .insert([
      {
        name,
        email,
        phone,
        message,
        service,
        created_at: new Date().toISOString()
      }
    ])

  // Enviar email
  await sendEmail({
    to: 'carlosfox1782@gmail.com',
    subject: `Nova ${type === 'schedule' ? 'Agendamento' : 'Mensagem'} - Clínica Apolonia`,
    html: generateEmailTemplate({ name, email, phone, message, service })
  })

  return new Response(JSON.stringify({ success: true }))
})
```

## 📱 Páginas e Navegação

### **Estrutura do Site**
1. **Home** (`/`)
   - Hero section com botão de agendamento
   - Seções: Sobre, Missão, Cultura
   - Header e footer com botões de ação

2. **Serviços** (`/servicos`)
   - Lista de serviços médicos
   - Botões "Agendar" e "Saiba mais" para cada serviço
   - Modal contextual com informações do serviço

3. **Especialidades** (`/especialidades`)
   - Lista de especialidades médicas
   - Botões "Agendar" e "Saiba mais" para cada especialidade
   - Modal contextual com informações da especialidade

### **Componentes Principais**
- `ContactModal`: Modal unificado para contato e agendamento
- `DetailsModal`: Modal com detalhes de serviços/especialidades
- `useContactModal`: Hook para gerenciar estado dos modais
- `Header`: Navegação principal com botões de ação
- `Footer`: Informações de contato e links rápidos

## 🔐 Acesso ao Backend

### **Supabase Dashboard**
- **URL**: Configurado via integração Lovable
- **Acesso**: Via botão verde "Supabase" no canto superior direito
- **Credenciais**: Configuradas automaticamente pela integração

### **Verificação de Funcionamento**
1. Teste os formulários no frontend
2. Verifique dados no Supabase Dashboard
3. Confirme recebimento de emails
4. Monitore logs das Edge Functions

## 📊 Monitoramento e Analytics

### **Métricas Importantes**
- Número de agendamentos por dia/mês
- Taxa de conversão dos formulários
- Especialidades mais procuradas
- Horários de maior demanda

### **Logs e Debugging**
- Console do navegador para erros frontend
- Supabase logs para errors backend
- Edge Functions logs para debugging

## 🚀 Deploy e Manutenção

### **Deploy Atual**
- **Frontend**: Lovable hosting automático
- **Backend**: Supabase Edge Functions
- **Banco**: Supabase PostgreSQL

### **Manutenção Regular**
1. Backup dos dados mensalmente
2. Verificação de funcionamento dos emails
3. Atualização de credenciais quando necessário
4. Monitoramento de performance

## 📞 Suporte e Contato

Para dúvidas sobre implementação ou funcionamento:
- **Email**: carlosfox1782@gmail.com
- **Documentação**: Este arquivo README.md
- **Logs**: Disponíveis no Supabase Dashboard

---

**Última atualização**: $(date)
**Versão**: 1.0.0
**Status**: Funcional e em produção
