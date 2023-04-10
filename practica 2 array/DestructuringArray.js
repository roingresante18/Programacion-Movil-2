/**DESTRUCTURING DE ARRAY
 * Para desestructurar un array se debe proceder de manera similar al de los objetos
 */

 const productos=["Mouse","Teclado","Impresora","Notebook","Monitor"]
 const [pro1,pro2,,t]=productos
 console.log(pro1,pro2,t)
 
 //En caso de tener muchos productos y se requiere solo un de ellos 
 //por ejemplo Notebook
 
 // const [prod1,prod2,prod3,prod4]=productos //esto no es lo conveniente porque estoy creando variables innecesariamente
 const[,,,prod4]=productos // esta es la manera mÃ¡s adecuada
 
 console.log(prod4)
 