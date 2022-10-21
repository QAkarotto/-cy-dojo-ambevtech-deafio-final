//UI
Cypress.Commands.add("adicionarProdutoAoCarrinhoUI", (produto) => {
	cy.visit(`product/${produto.url}/`);
	cy.get(`[data-value=${produto.tamanho}]`).click();
	cy.get(`[data-value=${produto.cor}]`).click();
  cy.get('[name="quantity"]').clear().type(produto.quantidade);
	cy.get(".single_add_to_cart_button").click();
});

//API
Cypress.Commands.add("consultarCupomAPI", (token, cupomId) => {
	cy.request({
		method: "GET",
		url: `/wp-json/wc/v3/coupons/${cupomId}`,
		headers: {
			authorization: token,
		},
	});
});

Cypress.Commands.add("consultarCupons", (token) => {
	cy.request({
		method: "GET",
		url: "/wp-json/wc/v3/coupons/",
		headers: {
			authorization: token,
		},
	})
});

Cypress.Commands.add(
	"adicionarCupomAPI",
	(token, code, amount, discount_type, description) => {
		cy.request({
			method: "POST",
			url: `/wp-json/wc/v3/coupons`,
      failOnStatusCode: false,
			headers: {
				authorization: token,
			},
			body: {
				code: code,
				amount: amount,
				discount_type: discount_type,
				description: description,
			},
		});
	}
);
