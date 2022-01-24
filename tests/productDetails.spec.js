const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
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

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
  });
    // ESCREVA SEUS TESTES ABAIXO:
  it('Teste se productDetails é uma função.', () => {
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
  });
  it('Teste se o retorno da função é um array.', () =>{
    // Teste se o retorno da função é um array.
    expect(productDetails('P-Produto', 'S-Produto')).toEqual([{
      name: 'P-Produto', details: { productId: 'P-Produto123'}}, {
      name: 'S-Produto', details: { productId: 'S-Produto123'}
      }
    ]);
  });
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails.length).toBe(2);
    // Teste se o array retornado pela função contém dois itens dentro.
  });
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {

    expect(productDetails('T-Produto', 'T-Produto')).toEqual([{
      name: 'T-Produto', details: { productId: 'T-Produto123'}}, {
      name: 'T-Produto', details: { productId: 'T-Produto123'}
      }
    ]);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
  });
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {

    expect(productDetails('T-Produto', 'Q-Produto')).toEqual([{
      name: 'T-Produto', details: { productId: 'T-Produto123'}}, {
      name: 'Q-Produto', details: { productId: 'Q-Produto123'}
      }
    ]);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  });
  it('Teste se os dois productIds terminam com 123.', () => {
    expect(productDetails('ST-Produto', 'Q-Produto')).toEqual([{
      name: 'ST-Produto', details: { productId: 'ST-Produto123'}}, {
      name: 'Q-Produto', details: { productId: 'Q-Produto123'}
      }
    ]);
    // Teste se os dois productIds terminam com 123.
  });
});
