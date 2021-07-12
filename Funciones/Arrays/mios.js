//AGREGAR VALOR EN POSICION INTERMEDIA
  function arrAgregar(arr, p, valor){
    let l=arr.length;
    if(p<l&&p>=0){
      for(let i=l-1; i>p-1; i--){
        arr[i+1]=arr[i];
      }
      arr[p]=valor;
      return arr;
    } else {
      return false;
    }
  }

//ELIMINAR VALOR INTERMEDIO
  function arrEliminar(arr, p){
    let l=arr.length;
    if(p<l&&p>=0){
      for(let i=p; i<l-1; i++){
        arr[i]=arr[i+1];
      }
      arr.pop();
      return arr;
    } else {
      return false;
    }
  }
  //EJ: 
    var arr = [ 1, 2, 3, 4, 5 ]
    arr = arrEliminar(arr, 2) // [ 1, 2, 4, 5 ]


//OBTENER DIGITOS COMPRENDIDOS ENTRE UNO Y OTRO (INCLUYENDO A LOS MENCIONADOS) EN EL ORDEN INDICADO
  function deHasta(p){
    if(p<0||p>=0){
      return false;
    }
    let de=p.split("")[0].charCodeAt(), hasta=p.split("")[1].charCodeAt();
    let n=Math.abs(hasta-de)+1;
    let res=Array(n);
    let sentido=true;
    if(de>hasta){
      sentido=false;
    }
    for(let i=0; i<n; i++){
      if(sentido){
        res[i]=String.fromCharCode(de+i);
      } else{
        res[n-i-1]=String.fromCharCode(hasta+i);
      }
    }
      return res;
  }
  //EJ:
    deHasta("09") // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    deHasta("90") // [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]
    deHasta("AE") // [ 'A', 'B', 'C', 'D', 'E' ]
    deHasta(":@") // [ ':', ';', '<', '=', '>', '?', '@' ]
