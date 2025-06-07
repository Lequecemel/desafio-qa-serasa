/// <reference types="cypress" />

describe('Trello API - Excluir Board', () => {
  let boardId;

  it('Cria um board temporário', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.trello.com/1/boards/',
      qs: {
        name: 'Board para Exclusão',
        defaultLabels: true,
        defaultLists: false,
        key: Cypress.env('TRELLO_KEY'),
        token: Cypress.env('TRELLO_TOKEN'),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      boardId = response.body.id;
      cy.log('Board criado:', boardId);
    });
  });

  it('Exclui o board criado', () => {
    cy.wrap(null).should(() => {
      expect(boardId).to.not.be.undefined;
    });

    cy.request({
      method: 'DELETE',
      url: `https://api.trello.com/1/boards/${boardId}`,
      qs: {
        key: Cypress.env('TRELLO_KEY'),
        token: Cypress.env('TRELLO_TOKEN'),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log('Board excluído:', boardId);
    });
  });
});
