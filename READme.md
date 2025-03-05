# 🍽️ Sistema de Reservas de Restaurante

Bem-vindo ao **Sistema de Reservas de Restaurante**, uma API para gerenciar reservas de mesas em um restaurante. O objetivo é desenvolver funcionalidades comuns em sistemas reais de reserva, incluindo autenticação, validação e controle de disponibilidade. Esse projeto será uma ótima adição ao seu portfólio de backend! 🚀

---

## 📌 Requisitos do Projeto

### 🎯 Objetivo Principal

- **Backend:** Node.js (Express)
- **Banco de Dados:** PostgreSQL com Prisma
- **Autenticação:** JWT (JSON Web Tokens)

### 📌 Funcionalidades

Desenvolver uma API RESTful para:

✅ Registrar reservas de mesas.
✅ Controlar o status das reservas e das mesas.
✅ Bloquear reservas quando a mesa estiver ocupada.

---

## 🏗️ Stack Recomendado

- **Node.js** com Express
- **PostgreSQL** + Prisma ORM
- **JWT** para autenticação
- **Docker** para facilitar a configuração do ambiente

---

## 🔑 Autenticação de Usuário

A API utiliza **JWT** para autenticação e autorização, garantindo que apenas usuários registrados possam criar e gerenciar reservas.

---

## 🗄️ Estrutura do Banco de Dados

### 🧑‍💼 Usuários
| Campo | Tipo | Descrição |
|--------|------|------------|
| `id` | UUID | Identificador único |
| `nome` | String | Nome do usuário |
| `email` | String | E-mail do usuário (único) |
| `senha` | String | Senha armazenada com hash |
| `role` | String | Papel do usuário (cliente ou administrador) |

### 🍽️ Mesas
| Campo | Tipo | Descrição |
|--------|------|------------|
| `id` | UUID | Identificador único |
| `nome` | String | Nome ou número da mesa |
| `capacidade` | Integer | Quantidade máxima de pessoas |
| `status` | String | Status da mesa (disponível, reservada, inativa) |

### 📅 Reservas
| Campo | Tipo | Descrição |
|--------|------|------------|
| `id` | UUID | Identificador único |
| `usuario_id` | UUID | ID do usuário que fez a reserva |
| `mesa_id` | UUID | ID da mesa reservada |
| `data_reserva` | DateTime | Data e horário da reserva |
| `status` | String | Status da reserva (ativo, cancelado) |

---

## 📡 Endpoints da API

### 🔐 Autenticação
- **POST** `/usuarios/registrar` — Cadastro de novos usuários.
- **POST** `/usuarios/login` — Login de usuários e geração de token JWT.

### 🍽️ Mesas
- **GET** `/mesas` — Lista todas as mesas e seus status.
- **POST** `/mesas` — Adiciona uma nova mesa (apenas administradores).
- **PATCH** `/mesas/:id` — Atualiza informações de uma mesa.
- **DELETE** `/mesas/:id` — Remove uma mesa (apenas administradores).

### 📅 Reservas
- **POST** `/reservas` — Cria uma nova reserva, validando disponibilidade e capacidade da mesa.
- **GET** `/reservas` — Lista todas as reservas do usuário autenticado.
- **PATCH** `/reservas/:id/cancelar` — Cancela uma reserva ativa.

---

## 🔐 Registro e Login

✔️ **Registro:** O usuário deve ser capaz de se registrar com um nome, e-mail e senha.
✔️ **Login:** Usuários autenticados recebem um token JWT para acesso às funcionalidades de reservas.
✔️ **Restrição de Acesso:** Apenas usuários logados podem criar e visualizar reservas.

---

## 🍽️ Gestão de Mesas

✔️ **Listagem:** Listar todas as mesas disponíveis no restaurante.
✔️ **Criar Mesa:** Administradores podem adicionar novas mesas ao sistema com um nome e capacidade de pessoas.
✔️ **Status da Mesa:** Cada mesa pode estar disponível, reservada ou inativa.

---

## 📅 Sistema de Reservas

✔️ **Criar Reserva:** Usuários autenticados podem criar reservas para mesas específicas.
✔️ **Verificar Disponibilidade:** A API verifica se a mesa está disponível no horário solicitado antes de confirmar a reserva.
✔️ **Cancelar Reserva:** Usuários podem cancelar suas reservas, liberando a mesa para novas reservas.

---

## ⚙️ Controle de Status

✔️ **Status das Mesas:** Mesas ficam reservadas automaticamente ao serem associadas a uma reserva.
✔️ **Status das Reservas:** Reservas têm status **ativo** quando confirmadas e **cancelado** quando canceladas.

---

## 🚀 Conclusão

Essa API é uma ótima oportunidade para aprender e aplicar conceitos essenciais de desenvolvimento backend, incluindo autenticação, gerenciamento de banco de dados e implementação de regras de negócio. Se você deseja aprimorar suas habilidades e adicionar um projeto robusto ao seu portfólio, esse é um excelente desafio! 💡

