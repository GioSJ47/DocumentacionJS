//DETECTAR SI EL VALOR NUMERICO NO ESTÁ DEFINIDO (isNaN)
  isNaN(0/0)   // true, dividir 0 en 0 no define un resultado numerico
  isNaN(NaN)   // true
  isNaN('a')   // true
  isNaN("Txt") // true
  isNaN(130)   // false
  isNaN(1.2)   // false
  isNaN('4')   // false
  isNaN("2.3") // false
  isNaN(0x12)  // false


//CONSTANTE INFINITA (Infinity)
  var num =  10 / 0      //  Infinity
  var num = -10 / 0      // -Infinity
  var num = Infinity + 5 //  Infinity
  

//PASAR UN STRING A NUMERO RESPETANDO LA PARTE FLOTANTE (parseFloat)
  parseFloat(10)      // 10
  parseFloat("10")    // 10
  parseFloat(12.5)    // 12.5
  parseFloat("12.5")  // 12.5
  parseFloat(0xF)     // 15
  parseFloat(0xF+0.1) // 15.5
  parseFloat("0xF")   // 0

//PASAR UN NUMERO O STRING A NUMERO ENTERO (parseInt)
  parseInt(10)      // 10
  parseInt("10")    // 10
  parseInt(12.5)    // 12
  parseInt("12.5")  // 12
  parseInt(0xF)     // 15
  parseInt(0xF+0.1) // 15
  parseInt("0xF")   // 0


//CORTAR DECIMALES Y REDODNDEAR
  var num = 45.34567
  num.toFixed()    // 45
  num.toFixed(1)   // 45.3
  num.toFixed(2)   // 45.35
  num.toFixed(6)   // 45.345670
