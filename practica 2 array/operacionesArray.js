/** OPERACIONES CON ARRAY
 * 
 * Es posible realizar diferentes operaciones con los array
 * agregar datos
 * eliminar datos, 
 * modificar datos
//  */

//  const arrayFrutas=["Manzana", "Banana", "Frutillas", "Durazno", "MelÃ³n"]
//  console.table(arrayFrutas)
 
 //AGREGAR ELEMENTOS
     //1 - agrega elementos pero modifica el array no es lo ideal 
         //  arrayFrutas.push("Pera")//agrega al final
         // arrayFrutas.unshift("Naranja")// agrega al comienzo
         // console.table(arrayFrutas)//    
 
     //2 - agrega elementos sin modificar el array
         //     const nuevoarreglo=[...arrayFrutas, "Ciruelas"] //agrega al final
 //             const nuevoarreglo1=["MelÃ³n", ...arrayFrutas] //agrega al comienzo
 //         //     console.table(nuevoarreglo)
 //  console.table(nuevoarreglo1)
 
 //ELIMINAR ELEMENTOS
 //1 - elimina elementos pero modifica el array no es lo ideal
         //  arrayFrutas.pop()//elimina del final
         // // arrayFrutas.shift()//elimina del inicio
         // arrayFrutas.splice(2,2)//elimina elementos centrales, los parametros el 1Âº le indica de que posicion eliminar y el 2Âº cuantos elementos
         // console.table(arrayFrutas)
 
 
 //2 - agrega elementos sin modificar el array
      // Utilizamos el mÃ©todo filter, le pasamos una funciÃ³n que va a iterar por cada elemento del array
             
 //      const nuevoArray3= arrayFrutas.filter(
 //                 function(f){
 //                 return f!=="Frutilla"
 //             })
 //             console.table(nuevoArray3)
 
 //MODIFICAR ELEMENTOS
 //1 - Modifica elementos pero modifica el array
         // arrayFrutas[0]= "SandÃ­a"
         // console.table(arrayFrutas)
 
 //2 - Modifica elementos sin modificar el array
     // Utilizamos el mÃ©todo map, le pasamos una funciÃ³n que va a iterar por cada elemento del array
 //      const nuevoArray4= arrayFrutas.map(function(fruta){
 //                 if (fruta==="Frutillas"){
 //                     return "Mandarina"
 //                 }else{
 //                     return fruta
 //                 }
 //             })
 //             console.table(nuevoArray4)