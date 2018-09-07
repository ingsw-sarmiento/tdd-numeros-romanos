const expect = require('chai').expect;
const ConversorArabigoRomano = require('../app/conversorArabigoRomano');

let conversor;

describe("El conversor de árabe a romano", () => {
  beforeEach(() => {
    conversor = new ConversorArabigoRomano();
  });

  it("puede convertir números que solo usan I", () => {
    expect(conversor.valorPara(3)).to.eq("III");
  });

  it("puede convertir el número 4", () => {
    expect(conversor.valorPara(4)).to.eq("IV");
  });

  it("puede convertir el número 5", () => {
    expect(conversor.valorPara(5)).to.eq("V");
  });

  it("puede convertir números con una V y varias I", () => {
    expect(conversor.valorPara(7)).to.eq("VII");
  });

  it("puede convertir el 9", () => {
    expect(conversor.valorPara(9)).to.eq("IX");
  });

  it("puede convertir el 10", () => {
    expect(conversor.valorPara(10)).to.eq("X");
  });

  it("puede convertir números con una X y varias I", () => {
    expect(conversor.valorPara(13)).to.eq("XIII");
  });

  it("puede convertir el 14", () => {
    expect(conversor.valorPara(14)).to.eq("XIV");
  });

  it("puede convertir números con una X, una V y varias I", () => {
    expect(conversor.valorPara(18)).to.eq("XVIII");
  });
});
