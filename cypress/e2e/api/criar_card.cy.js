const BOARD_ID = '68421fb081c56bdb656b2b73'; // Seu board

describe('Trello API - Criar Card', () => {
  let listId;
  let cardId;

  it('Deve criar uma lista no board', () => {
    cy.request({
      method: 'POST',
      url: `https://api.trello.com/1/lists`,
      qs: {
        name: 'Lista de Testes',
        idBoard: BOARD_ID,
        key: Cypress.env('TRELLO_KEY'),
        token: Cypress.env('TRELLO_TOKEN'),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Lista de Testes');
      listId = response.body.id;
      cy.log('LIST_ID:', listId);
    });
  });

  it('Deve criar um card na lista', () => {
    cy.wrap(null).should(() => {
      expect(listId).to.not.be.undefined;
    });

    cy.request({
      method: 'POST',
      url: `https://api.trello.com/1/cards`,
      qs: {
        name: 'Card Automatizado',
        idList: listId,
        key: Cypress.env('TRELLO_KEY'),
        token: Cypress.env('TRELLO_TOKEN'),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Card Automatizado');
      cardId = response.body.id;
      cy.log('CARD_ID:', cardId);
    });
  });
});
