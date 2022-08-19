const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  // ESCREVA SEUS TESTES ABAIXO:
  const products = productDetails('agua', 'papel higiênico');
  it('Teste se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function')
  });

  it('Teste se o retorno da função é um array.', () => {
    expect(Array.isArray(products)).toBeTruthy()
  });

  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(products.length).toBe(2)
  });

  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof products[0] && typeof products[1]).toBe('object')
  });

  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(products[0] !== products[1]).toBeTruthy()
  });

  it('Teste se os dois productIds terminam com 123.', () => {
    const produtoId0 = products[0].details.productId;
    const produtoName0 = products[0].name.length;
    const produtoId1 = products[1].details.productId;
    const produtoName1 = products[1].name.length;

    expect(produtoId0.substring(produtoName0, produtoId0.length) && produtoId1.substring(produtoName1, produtoId1.length)).toBe('123')
  });

});
