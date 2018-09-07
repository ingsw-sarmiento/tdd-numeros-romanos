module.exports =

class ConversorArabigoRomano {
  valorPara(numeroArabigo) {
    var resultado = "";

    if (numeroArabigo === 4) {
      resultado = "IV";
    } else if (numeroArabigo === 5) {
      resultado = "V";
    } else if (numeroArabigo === 6) {
      resultado = "VI";
    } else {
      for (var i = 0; i < numeroArabigo; i++) {
        resultado += "I"
      }
    }
    
    return resultado;
  }
}
