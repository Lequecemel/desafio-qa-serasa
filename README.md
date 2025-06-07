# Desafio de QA - Serasa Experian

Este projeto é a solução para o desafio prático de QA da Serasa Experian. Ele é dividido em três partes:

1. **Especificação de cenários de teste para um aplicativo bancário**
2. **Consultas SQL com base em um modelo entidade-relacionamento**
3. **Automação de testes com Cypress, utilizando a API do Trello**

---

## 📁 Estrutura do Projeto

Prova_QA/
│
├── cypress/
│ └── e2e/
│ ├── criarBoard.cy.js
│ ├── criarCard.cy.js
│ └── excluirCard.cy.js
│
├── cypress.config.js
├── package.json
├── README.md
├── parte1-cenarios-de-teste.txt
├── parte2-consultas-sql.txt
└── mapa-mental.png


---

##  Como rodar os testes automatizados

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Git](https://git-scm.com/) instalado

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/desafio-qa-serasa.git
cd desafio-qa-serasa

2. Instale as dependências:
npm install

3. Inicie o Cypress:
npx cypress open

4. Execute os testes pela interface do Cypress ou via terminal:
npx cypress run

 Testes automatizados
Os testes foram desenvolvidos em Cypress utilizando a API pública do Trello. Os arquivos estão localizados em:
cypress/e2e/

Cenários cobertos:

- Criação de board com sucesso

- Criação de card em um board

- Exclusão de card

- Exclusão de board

 Mapa mental da estratégia de testes
O arquivo mapa-mental.png mostra a estratégia geral adotada para o desafio, incluindo cobertura de testes manuais e automatizados.

 Especificações funcionais
parte1-cenarios-de-teste.txt: descreve os cenários de teste para funcionalidades bancárias fictícias.

parte2-consultas-sql.txt: contém as consultas SQL baseadas no DER fornecido no desafio.

 Tecnologias utilizadas
Cypress 14.4.1

Node.js

JavaScript

API pública Trello REST

Git

 Contato
Caso tenha dúvidas ou queira entrar em contato, fique à vontade!