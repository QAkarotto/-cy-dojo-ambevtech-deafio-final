Cypress.Commands.add('adicionarProdutoAoCarrinho', (produto) => {
  cy.visit(`product/${produto.url}/`);
  cy.get(`[data-value=${produto.tamanho}]`).click();
  cy.get(`[data-value=${produto.cor}]`).click();
  cy.get(".single_add_to_cart_button").click();
})