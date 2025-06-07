/// <reference types="cypress" />

const BOARD_ID = '68421fb081c56bdb656b2b73'; // seu board de testes
let listId;
let cardId;

describe('Trello API - Excluir Card', () => {
  it('Cria uma lista no board', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.trello.com/1/lists',
      qs: {
        name: 'Lista para Excluir Card',
        idBoard: BOARD_ID,
        key: Cypress.env('TRELLO_KEY'),
        token: Cypress.env('TRELLO_TOKEN'),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      listId = response.body.id;
    });
  });

  it('Cria um card na lista', () => {
    cy.wrap(null).should(() => {
      expect(listId).to.not.be.undefined;
    });

    cy.request({
      method: 'POST',
      url: 'https://api.trello.com/1/cards',
      qs: {
        name: 'Card para ser excluído',
        idList: listId,
        key: Cypress.env('TRELLO_KEY'),
        token: Cypress.env('TRELLO_TOKEN'),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      cardId = response.body.id;
    });
  });

  it('Exclui o card criado', () => {
    cy.wrap(null).should(() => {
      expect(cardId).to.not.be.undefined;
    });

    cy.request({
      method: 'DELETE',
      url: `https://api.trello.com/1/cards/${cardId}`,
      qs: {
        key: Cypress.env('TRELLO_KEY'),
        token: Cypress.env('TRELLO_TOKEN'),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
