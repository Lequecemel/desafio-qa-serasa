const { defineConfig } = require('cypress');
require('dotenv').config(); // <- Carrega as variáveis do .env

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://api.trello.com',
    env: {
      TRELLO_KEY: process.env.TRELLO_KEY,
      TRELLO_TOKEN: process.env.TRELLO_TOKEN,
    },
  },
});
