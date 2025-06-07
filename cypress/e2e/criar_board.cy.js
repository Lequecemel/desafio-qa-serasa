describe('Criar Board no Trello', () => {
  it('Deve criar um board com sucesso', () => {
    cy.request({
      method: 'POST',
      url: `/1/boards/?name=Board Teste Automatizado&key=${Cypress.env('TRELLO_KEY')}&token=${Cypress.env('TRELLO_TOKEN')}`
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('name', 'Board Teste Automatizado')
      expect(response.body).to.have.property('id')

      // 🟡 NOVO: mostra o BOARD_ID no console e no runner
      const boardId = response.body.id;
      cy.log(`BOARD_ID: ${boardId}`);
      console.log('BOARD_ID:', boardId);
    });
  });
});
