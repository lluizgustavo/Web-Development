const { info, printMessage } = require('../src/printMessage');

describe('2 - Implemente o caso de teste para a função `printMessage`', () => {
  it ('Testa a propriedade personagem no objeto.', () => {
    expect(info).toHaveProperty("personagem")
  });
});

describe('3 - Ainda sobre a função `printMessage`, adicione os casos de teste a seguir`', () => {
  it ('Testa a informação de boas vindas.', () => {
    expect(printMessage(info)).toBe(`Boas vindas, ${info.personagem}`)
  });
  
  it ('Testa a informação referente ao nome da personagem.', () => {
    expect(printMessage(info)).toContain(info.personagem)
  });
});

describe('4 - Crie um fluxo de exceção para a função `printMessage`', () => {
  const newInfo = {
    personagem: undefined,
    origem: "Pato Donald",
    nota: "Desenho legal",
  }
  it ('Testa o fluxo de exceção da função printMessage.', () => {
    expect(() => printMessage(newInfo)).toThrow(Error)
  });
});
