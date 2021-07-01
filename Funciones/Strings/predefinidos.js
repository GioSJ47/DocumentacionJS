//DE STRING A ARRAY (split)
  var str = "Mi texto va aquí.";
  str = str.split("") // ["M", "i", " ", "t", "e", "x", "t", "o", " ", "v", "a", " ", "a", "q", "u", "í", "."]

//SEPARAR STRING EN ARRAYS CON UN SEPARADOR (split)
  var str = "Primer texto;Segundo Texto;Tercer texto;Ultimo texto";
  str = str.split(";") // ["Primer texto", "Segundo Texto", "Tercer texto", "Ultimo texto"]

  var str = "Primer texto SEPARADOR Segundo Texto SEPARADOR Tercer texto SEPARADOR Ultimo texto";
  str = str.split(" SEPARADOR ")  // ["Primer texto", "Segundo Texto", "Tercer texto", "Ultimo texto"]


//UNIR ARRAYS PARA FORMAR UN MISMO STRING (join)
  var str = ["Primer texto", "Segundo Texto", "Tercer texto", "Ultimo texto"]
  str = str.join() // "Primer texto,Segundo Texto,Tercer texto,Ultimo texto"

  var str = ["A", "E", "I", "O", "U"]
  str = str.join("")
  // str = "AEIOU"

  var str = ["Primer texto", "Segundo Texto", "Tercer texto", "Ultimo texto"]
  str = str.join("-") // "Primer texto-Segundo Texto-Tercer texto-Ultimo texto"


//TODO A MAYUSCULAS (toUpperCase)
  var str = "Este texto lo quiero en mayusculas"
  str = str.toUpperCase() // "ESTE TEXTO LO QUIERO EN MAYUSCULAS"

//TODO EN MINUSCULAS (toLowerCase)
  var str = "ESTE TEXTO LO QUIERO EN MINUSCULAS"
  str = str.toLowerCase() // "este texto lo quiero en minusculas"


//OBTENER EL CARACTER QUE SE ENCUENTRA EN CIERTA POSICION (charAt)
  var str = "Mi texto"
  var pos = str.charAt(3) // "t"
  
  var str = "Mi texto"
  var pos = str.charAt(8) // ""

//ENCUENTRA LA PRIMERA POSICION DONDE SE ENCUANTRA UN CARACTER O STRING (indexOf)
  var str = "Mi texto"
  var pos = str.indexOf('x') // 5

  var str = "Mi texto"
  var pos = str.indexOf('texto') // 3

//ENCUENTRA LA ULTIMA POSICION DONDE SE ENCUANTRA UN CARACTER O STRING (lastIndexOf)
  //         012345678901
  var str = "repeticion repeticion REPETICION"
  var pos = str.lastIndexOf("repeticion") // 11
  
  
//EXTRAER PORCION (substring)
  //         01234567890123
  var str = "Recortando mi texto.";
  var porcion = str.substring(11) // "mi texto."
  var porcion = str.substring(11, 13) // "mi"
  var porcion = str.substring(13, 11) // "mi"
  


