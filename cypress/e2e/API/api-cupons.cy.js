describe("Funcionalidade: API de cupons", () => {
	let cupomCriadoId;
	it("GET Deve consultar cupons", () => {
		cy.consultarCupons(Cypress.env("token")).should((response) => {
			cy.log(response);
			expect(response.status).to.equal(200);
		});
	});

	it("GET Deve consultar um cupom específico pelo id", () => {
		cy.adicionarCupomAPI(
			Cypress.env("token"),
			"goku" + Date.now(),
			"50%",
			"fixed_product",
			"teste"
		)
			.then((response) => {
				cupomCriadoId = response.body.id;
			})
			.then(() => {
				cy.consultarCupomAPI(
					Cypress.env("token"),
					cupomCriadoId
				).should((response) => {
					cy.log(response);
					expect(response.status).to.equal(200);
					expect(response.body.id).to.equal(cupomCriadoId);
				});
			});
	});

	it("POST Deve inserir um novo cupom", () => {
		cy.adicionarCupomAPI(
			Cypress.env("token"),
			"goku" + Date.now(),
			"50%",
			"fixed_product",
			"teste"
		).should((response) => {
			cy.log(response);
			expect(response.status).to.equal(201);
			expect(response.body.id).not.be.null;
		});
	});

	it("POST Deve falhar ao tentar um novo cupom com código existente", () => {
		let codigoCupom = "goku" + Date.now();
		cy.adicionarCupomAPI(
			Cypress.env("token"),
			codigoCupom,
			"50%",
			"fixed_product",
			"teste"
		);

		cy.adicionarCupomAPI(
			Cypress.env("token"),
			codigoCupom,
			"50%",
			"fixed_product",
			"teste"
		).should((response) => {
			expect(response.status).to.equal(400);
			expect(response.body.message).to.equal(
				"O código de cupom já existe"
			);
		});
	});
});
