const expect = require('chai').expect;
const ConversorArabigoRomano = require('../app/conversorArabigoRomano');

let conversor;

describe("El conversor de árabe a romano", () => {
  beforeEach(() => {
    conversor = new ConversorArabigoRomano();
  });

  it("puede convertir el número 1", () => {
    expect(conversor.valorPara(1)).to.eq("I");
  });

  it("puede convertir el número 2", () => {
    expect(conversor.valorPara(2)).to.eq("II");
  });

  it("puede convertir el número 3", () => {
    expect(conversor.valorPara(3)).to.eq("III");
  });
});
