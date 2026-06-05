# Playerbook  

Um projeto fullstack desenvolvido para experimentar fontend, backend e fullstack.
Consiste numa plataforma para criar playlists para ouvir enquanto lê determinado livro.
No momento o projeto está como MVP possuindo a infraestrutura baseada na stack PERN (PostgreSQL, Express, React e Node.js) para o cadastro e listagem de livros.

## Tecnologias Utilizadas

### Frontend
* React (inicializado via Vite)
* Chakra UI (v2) para a construção e estilização de componentes
* JavaScript

### Backend
* Node.js
* Express para gerenciamento de rotas e requisições HTTP
* Cors para integração entre domínios

### Banco de Dados
* PostgreSQL
* Pacote `pg` (node-postgres) para comunicação direta com o banco
* Dotenv para gerenciamento de variáveis de ambiente e credenciais

## Funcionalidades Atuais
* Conexão completa e bidirecional entre interface de usuário, servidor e banco de dados relacional.
* Formulário para registro de novos livros (Título e Autor) via método POST.
* Listagem dinâmica dos livros cadastrados no banco de dados via método GET.

## Próximos Passos (Roadmap)
* Modelagem e criação da tabela de Playlists no banco de dados, estabelecendo relacionamento com a tabela de livros.
* Implementação do sistema de embed (incorporação de iframes) para rodar playlists do Spotify e YouTube nativamente na aplicação.
* Criação de perfis de usuário.

## Como executar o projeto localmente

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
* Node.js e npm
* PostgreSQL

### 1. Configuração do Banco de Dados
Acesse o seu PostgreSQL pelo terminal (`sudo -u postgres psql`) e execute os comandos:

```sql
CREATE DATABASE leitura_playlists;

\c leitura_playlists

CREATE TABLE livros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL
);

```
### 2. Configuração do Backend
# Instale as dependências na pasta backend
npm install

# Crie um arquivo .env na raiz da pasta backend com as seguintes variáveis:
DB_USER=seu_usuario_postgres
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
DB_NAME=leitura_playlists

# Inicie o servidor em modo de desenvolvimento
npm run dev

### 3. Configuração do Frontend
# Instale as dependências na pasta frontend
npm install

# Inicie a aplicação
npm run dev

Acesse o link gerado pelo Vite (geralmente http://localhost:5173) no seu navegador.