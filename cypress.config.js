const { defineConfig } = require("cypress");

module.exports = defineConfig({
	env: {
		token: "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"
	},

	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: "http://lojaebac.ebaconline.art.br/",
	},
});
