//STRING DENTRO DE COMILLAS SIMPLES
  var texto = 'Este es mi string.'

//STRING DENTRO DE COMILLAS DOBLES
  var texto = "Este es mi string."

//STRING DENTRO DE ACENTOS GRAVES
  var texto = `Este es mi string.`


//USO DE COMILLAS DOBLES DENTRO DE COMILLAS SIMPLES
  var texto = 'Este es mi "string".'
  
//USO DE ACENTOS GRAVES DENTRO DE COMILLAS SIMPLES
  var texto = 'Este es mi `string`.'

//USO DE COMILLAS SIMPLES DENTRO DE COMILLAS DOBLES
  var texto = 'Este es mi "string".'
  
//USO DE ACENTOS GRAVES DENTRO DE COMILLAS DOBLES
  var texto = 'Este es mi `string`.'
  
//USO DE COMILLAS SIMPLES DENTRO DE ACENTOS GRAVES
  var texto = `Este es mi 'string'.`
  
//USO DE COMILLAS DOBLES DENTRO DE ACENTOS GRAVES
  var texto = `Este es mi "string".`
  

//USO DE COMILLAS SIMPLES DENTRO DE COMILLAS SIMPLES
  var texto = 'Este es mi \'string\'.'
  
//USO DE COMILLAS DOBLES DENTRO DE COMILLAS DOBLES
  var texto = "Este es mi \"string\"."
  
//USO DE ACENTOS GRAVES DENTRO DE ACENTOS GRAVES
  var texto = `Este es mi \`string\`.`


//COCATENAR VARIABLE DENTRO DE COMILLAS SIMPLES
  var txt   = " Este es mi segundo string"
  var texto = 'Este es mi string.'+txt
  
//COCATENAR VARIABLE DENTRO DE COMILLAS DOBLES
  var txt   = " Este es mi segundo string"
  var texto = "Este es mi string."+txt
  
//COCATENAR VARIABLE DENTRO DE ACENTOS GRAVES
  var txt   = " Este es mi segundo string"
  var texto = `Este es mi string.`+txt
  var texto = `Este es mi string.${txt}`
  
  
  
//USO DE \u
  //DEFINICION: \u se usa para colocar el código hexadecimal de un símbolo.
  
  //EJEMPLO 1 (si o si tienen que ser 4 dígitos):
    var letra_E = "\u0045"    // E
    
  //EJEMPLO 2 (si se coloca entre llaves, no es necesario rellenar con ceros hasta tener 4 dígitos):
    var letra_E = "\u{45}"    // E
    
  //EJEMPLO 3:
    var letra_E = "\u{0045}"  // E
    
  //EJEMPLO 4:
    var letraChina = "\u6745" // 杅
