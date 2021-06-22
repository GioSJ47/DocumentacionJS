/*
  Los ciclos for se usan para repetir ciclicamente el
  código que esté expresado dentro de sus llaves hasta
  que se deje de cumplir cierta condición. Cada vez que
  se completa una ejecución, se 
*/

//PARTES DEL CICLO FOR
  for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización]){ 
    código que se debe repetir
  }


//USO COMUN ASCENDENTE
  for(let i = 0; i < 3; i++){
    console.log("Valor de i: " + i)
  }
  /*  RESULTADO EN CONSOLA:
      0
      1
      2
  */


//USO COMUN DESCENDENTE
  for(let i = 2; i <= 0; i--){
    console.log("Valor de i: " + i)
  }
  /*  RESULTADO EN CONSOLA:
      2
      1
      0
  */


//USO SIMPLE PARA EJECUTAR SEGUN LA CANTIDAD DE ELEMENTOS/VALORES QUE POSEA UN ARRAY (USANDO "in")
  var arr = [ 1, true, 3, ["A","B","C"] ]
  for(x in arr){
    console.log( x )
  }
  /*  RESULTADO EN CONSOLA:
        0
        1
        2
        3
  */


//USO SIMPLE PARA TRABAJAR CON CADA ELEMENTO DE UN ARRAY (USANDO "of")
  var arr = [ 1, true, 3, ["A","B","C"] ]
  for(x of arr){
    console.log( x )
  }
  /* RESULTADO EN CONSOLA:
      1
      true
      3
      ["A","B","C"]
  */
