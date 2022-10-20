import produtos from "../../fixtures/produtos.json";
import produto from "../../fixtures/produto23itens.json";

describe("Funcionalidade: Carrinho", () => {
	it("Deve adicionar itens ao carrinho com sucesso", () => {
		produtos.forEach(cy.adicionarProdutoAoCarrinhoUI);

		cy.visit("/carrinho");

		produtos.forEach((value, index) => {
			cy.get(`:nth-child(${index + 1}) > .product-name > a`).should(
				"contain",
				value.descricao
			);
		});
	});

//Não é permitido inserir mais de 10 itens de um mesmo produto ao carrinho;
//Os valores não podem ultrapassar a R$ 990,00;
//Valores entre R$ 200 e R$ 600 , ganham cupom de 10%
//Valores acima de R$ 600 ganham cupom de 15%
	it.only("Deve falhar ao tentar inserir mais de 10 itens do mesmo produto no carrinho e ultrapassar R$999,00", () => {
			//Não falha
			cy.adicionarProdutoAoCarrinhoUI(produto);
		}
		
	);

});
