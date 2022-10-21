# Desafio final

## Automação Web - Automação de UI
```http://lojaebac.ebaconline.art.br/```

- Crie um projeto de automação no Cypress;
- Crie uma pasta chamada UI para os testes WEB da História de Usuário [US-0001] – Adicionar item ao carrinho;
    - US: Como cliente da EBAC-SHOP
      <p> Quero adicionar produtos no carrinho 
      <p> Para realizar a compra dos itens 

    - Regras de negócio: 
      -	Não é permitido inserir mais de 10 itens de um mesmo produto ao carrinho;
      -	Os valores não podem ultrapassar a R$ 990,00;
      -	Valores entre R$ 200 e R$ 600 , ganham cupom de 10% 
      -	Valores acima de R$ 600 ganham cupom de 15%

- Na automação deve adicionar pelo menos 3 produtos diferentes e validar se os itens foram adicionados com sucesso.

## Automação API
```http://lojaebac.ebaconline.art.br/rest-api/docs/#/coupons/get_wc_v3_coupons```

- Crie uma pasta chamada API para os testes de API da História de usuário “Api de cupons”. 
  
  - US: Como admin da EBAC-SHOP
    <p> Quero criar um serviço de cupom
    <p> Para poder listar e cadastrar os cupons
    <p> Autenticação da API:

      -	Usuário: admin_ebac
      -	Senha: @admin!&b@c!2022
      -	Authorization: Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy

  - Regras de negócio:
    - GET: 
      -	Deve listar todos os cupons cadastrado ou listar buscando por ID do cupom
      -	Documentação do serviço: 
        `http://lojaebac.ebaconline.art.br/rest-api/docs/#/coupons/get_wc_v3_coupons`
        `http://lojaebac.ebaconline.art.br/rest-api/docs/#/coupons/get_wc_v3_coupons__id_` 

    - POST: 
      -	Deve cadastrar os cupons com os campos obrigatórios abaixo:
        - Código do cupom: Exemplo: “Ganhe10” 
        - Valor: “10.00”
        - Tipo do desconto: “fixed_product”
        -Descrição: “Cupom de teste”
      -	Nome do cupom não pode ser repetido;
      -	Os outros campos são opcionais.
      -	Documentação do serviço: 
      `http://lojaebac.ebaconline.art.br/rest-api/docs/#/coupons/post_wc_v3_coupons`
      
      -	Exemplo do body:             
          ```JSON       
          body: {
                      "code": "nomeCupom",
                      "amount": "10",
                      "discount_type": "fixed_product",
                      "description": "Cupom de desconto de teste"
                  }
          ```

- Faça a automação de listar os cupons e cadastrar cupom, seguindo as regras da História de usuário. 
- Exemplo da automação de Api – GET:

![image](./exemplo-api.png)

## Entrega do projeto

### IMPORTANTE: Considere todas as boas práticas de otimização de cenários (Page Objects, Massa de dados, Custom Commands, elementos etc.);

### Enviar o link do seu repositório do git para `fabiokaia25@gmail.com` e `renato.saoli@gmail.com` 

### Fiquem a vontade para implementar mais cenários;




