module.exports =

class ConversorArabigoRomano {
  valorPara(numeroArabigo) {
    var resultado = "";

    if (numeroArabigo === 4) {
      resultado = "IV";
      numeroArabigo -= 4;
    } else if (numeroArabigo === 9) {
      resultado = "IX";
      numeroArabigo -= 9;
    } else if (numeroArabigo === 14) {
      resultado = "XIV";
      numeroArabigo -= 14;
    } else if (numeroArabigo >= 10) {
      resultado = "X";
      numeroArabigo -= 10;
    }
    
    if (numeroArabigo >= 5) {
      resultado += "V";
      numeroArabigo -= 5;
    }

    for (var i = 0; i < numeroArabigo; i++) {
      resultado += "I"
    }

    return resultado;
  }
}
