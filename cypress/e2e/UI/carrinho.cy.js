import produtos from "../../fixtures/produtos.json";

describe("Funcionalidade: Carrinho", () => {
	it("Adicionar itens ao carrinho com sucesso", () => {
		produtos.forEach(cy.adicionarProdutoAoCarrinho);

		cy.visit("/carrinho");

		produtos.forEach((value, index) => {
			cy.get(`:nth-child(${index + 1}) > .product-name > a`).should(
				"contain",
				value.descricao
			);
		});
	});
});
