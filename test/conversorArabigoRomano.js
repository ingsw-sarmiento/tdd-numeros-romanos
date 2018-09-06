const expect = require('chai').expect;
const ConversorArabigoRomano = require('../app/conversorArabigoRomano');

let conversor;

describe("ConversorArabigoRomano", () => {
  beforeEach(() => {
    conversor = new ConversorArabigoRomano();
  });

  it("test1", () => {
    expect(2).to.eq(1);
  });
});
