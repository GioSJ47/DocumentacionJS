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

//USO COMUN
  for(let i=0; i<10; i++){
    console.log("Valor de i: " + i)
  }
  //SE ESCRIBE EN CONSOLA DESDE EL 0 HASTA EL 9

//USO SIMPLE PARA EXPLORAR UN ARRAY
  var arr = [ 1, 2, 3 ]
  for(let i of arr){
    console.log( arr[i-1] )
  }
  /* RESULTADO EN CONSOLA:
    1
    2
    3
  */
