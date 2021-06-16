//PARTES DEL CICLO FOR
  for( declaracion de variables locales; condicion; como afectar variables locales cada vez que se repite el ciclo ){
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
