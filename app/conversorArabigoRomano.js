module.exports =

class ConversorArabigoRomano {
  valorPara(numeroArabigo) {
    switch(numeroArabigo) {
        case 1:
            return "I";
        case 2:
            return "II";
        case 3:
            return "III";
        default:
            throw "No funciona para ese número";
    }
  }
}
