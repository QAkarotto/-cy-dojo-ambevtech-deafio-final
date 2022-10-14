describe("Funcionalidade: Carrinho", () => {
	it("Adicionar itens ao carrinho com sucesso", () => {
		const produtos = [
			{
				url: "supernova-sport-pant",
				tamanho: "32",
				cor: "Black",
				descricao: "Supernova Sport Pant - 32, Black",
			},
			{
				url: "ajax-full-zip-sweatshirt",
				tamanho: "XL",
				cor: "Blue",
				descricao: "Ajax Full-Zip Sweatshirt - XL, Blue",
			},
			{
				url: "arcadio-gym-short",
				tamanho: "33",
				cor: "Blue",
				descricao: "Arcadio Gym Short - 33, Blue",
			},
			{
				url: "atlas-fitness-tank",
				tamanho: "XS",
				cor: "Blue",
				descricao: "Atlas Fitness Tank - XS, Blue",
			},
		];

		produtos.forEach(cy.adicionarProdutoAoCarrinho);

		cy.visit("/carrinho");

		cy.get(":nth-child(1) > .product-name > a").should(
			"contain",
			produtos[0].descricao
		);
		cy.get(":nth-child(2) > .product-name > a").should(
			"contain",
			produtos[1].descricao
		);
		cy.get(":nth-child(3) > .product-name > a").should(
			"contain",
			produtos[2].descricao
		);
		cy.get(":nth-child(4) > .product-name > a").should(
			"contain",
			produtos[3].descricao
		);
	});
});
