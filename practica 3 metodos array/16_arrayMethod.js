/** Métodos de Array
 * Todos los que se ven en este video no mutan o no cambian el array origina
 * Para verificar los que si mutan o no visitar la siguiente pág web https://doesitmutate.xyz/
 */
const arrayFrutas=["Manzana", "Banana", "Frutillas","Melón","Naranjas"]
const numeros =[10,20,30,50,100,3000]

//forEach - solo se utilza para iterar - recordar que no retorna un nuevo array
    // arrayFrutas.forEach(fruta=>console.log(fruta))
    

//map() se observa como al aplicar arrow function se reduce mucho el código que se tenía en el archivo de los iteradores
    // const nuevoArray= arrayFrutas.map(fruta=>fruta)
    // console.log(nuevoArray)

//filter() - es el que recorre el array y filtra según la condición - idem anterior en reducción de código
    // const nuevoArray= arrayFrutas.filter(fruta => fruta !== "Frutillas")
    // const nuevoNumero=numeros.filter(numero=>numero>50)
    // console.log(nuevoArray)
    // console.log(nuevoNumero)

//include() - verifica si el array contiene un elemento, si lo contiene retorna un true, sino un false
    // const resultado=numeros.includes(30)
    // console.log(resultado)

//some() - itera al igual que filter y nos retorna true si la condición se cumple, false si no se cumple
// en este caso verifica si en el array hay números mayores a 40, si se cumple me retorna true, no me dice que elementos son, solo me dice que se cumple la condición  
    // const resultado=numeros.some(numero=> numero>4000)
    // console.log(resultado)

//every() - retorna true o false si todos cumplen la condición
    //  const resultado=numeros.every(numero=> numero<4000)
    //  console.log(resultado)

//find() - itera y devuelve el primer elemento que cumpla la condición, es decir me va a retornar el primero que sea mayor a 40, solo el primero
    //  const resultado=numeros.find(numero=> numero>40)
    // console.log(resultado)

//reduce() - es muy útil para un carrito de compras por ej. 
// recorre el array y suma todos los valores del array
// los parámetros que utiliza son el total donde va acumulando la suma y el numero, luego hace la suma con los parámetros y el 0 implica el valor con el que inicia la variable total

    // const resultado = numeros.reduce((total,numero)=>numero + total,0)
    // console.log(resultado)









    

