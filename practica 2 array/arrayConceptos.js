/** ARRAY CONCEPTOS
 * La diferencia al crear un array es que a diferencia de los objetos
 * este lleva corchetes, si lo creo vacio al llamarlo traera array vacÃio
 * es de tipo objeto si lo llamamos como typeof
 * Es posible cargar con cualquier valor incluso un objeto u otro array
 */
//array vacÃ­o
// const producto = []
// console.log(typeof producto)

// const { arrayBuffer } = require("stream/consumers")

//array unidimensional
// const producto1= ["hola",30,20]
// console.table(producto1)
// console.log(producto1[2])

// //array multidimensional
// const producto2= [[12,6],[19,123],]
// console.table(producto2)

// //array de objeto
// const producto3= [{nombre:"tinta impresora", precio:1500}]
// console.table(producto3)
//--------------------HASTA ACA ES TEORIA DE LA PROFESORA------------------------
//-----punto1------
// const numerosEnteros = [1,2,3,4,5,6,7,8,9,10];
// numerosEnteros.push(11.5,12.5,13.5);
// numerosEnteros.unshift(-1,-2)
// console.log(numerosEnteros);
//-----punto2------
// const alumnosIses = [
//     {
//         numeroMatricula: 0,
//         nombre:"Juan",
//         apellido:"Arzamendia",
//         domicilio:"Av Mitre 2134",
//         edad: 18,
//         carrera: "Tecnicatura Superior en Desarrollo App y Páginas Web ",
//         regularidad: true
// }, 
//     {
//         numeroMatricula: 1,
//         nombre:"Pedro",
//         apellido:"Gonzalez",
//         domicilio:"Av Peron 2334",
//         edad: 28,
//         carrera: "Tecnicatura Superior en Desarrollo App y Páginas Web ",
//         regularidad: true
// },
//     {
//         numeroMatricula: 2,
//         nombre:"Anastacia",
//         apellido:"Ruth",
//         domicilio:"Av Lisboa 34",
//         edad: 88,
//         carrera: "Tecnicatura Superior en Gatronomía ",
//         regularidad: true
// },
//     {
//         numeroMatricula: 3,
//         nombre:"Pedro ",
//         apellido:"Ruiz",
//         domicilio:"Av Rioja 582",
//         edad: 36,
//         carrera: "Tecnicatura Superior en Gatronomía ",
//         regularidad: true
// },
//     {
//         numeroMatricula: 4,
//         nombre:"juana",
//         apellido:"de Arco",
//         domicilio:"Av lopez Torrez 2134",
//         edad: 17,
//         carrera: "Tecnicatura Superior en Desarrollo App y Páginas Web ",
//         regularidad: true
// }
// ]
// // console.log(alumnosIses)

// alumnosIses.push({
//     numeroMatricula: 5,
//     nombre:"rodrigo",
//     apellido:"Zarate",
//     domicilio:"catamarca 5424",
//     edad: 27,
//     carrera: "Tecnicatura Superior en Desarrollo App y Páginas Web ",
//     regularidad: true
// },{
//     numeroMatricula: 6,
//     nombre:"alvaro",
//     apellido:"aguilar",
//     domicilio:"la rioja 5424",
//     edad: 27,
//     carrera: "Tecnicatura Superior en Gatronomía ",
//     regularidad: false
// },{
//     numeroMatricula: 7,
//     nombre:"sebastian", 
//     apellido:"portel",
//     domicilio:"mitre 924",
//     edad: 25,
//     carrera: "Tecnicatura Superior en Gatronomía ",
//     regularidad: false
// }
// )
// console.log(alumnosIses)

// alumnosIses.forEach(function(alumnosIses, i) {
//     console.log(`el alumno ${alumnosIses.nombre} ${alumnosIses.apellido} corresponde al indice ${i} ` )
// });

// alumnosIses.forEach(function(alumnosIses) {
//     const tecnicatura = "Tecnicatura Superior en Gatronomía "
//     if(alumnosIses.carrera === tecnicatura ){
//         console.log(`el alumno ${alumnosIses.nombre} estudia "Tecnicatura Superior en Gatronomía" ` )
//     }   
// })

//---------punto 3-----

// const productosSuper =[
//     {
//         Código: 0, 
//         Nombre:"leche",
//         precio: 500,
//         categoría: {
//             lacteo:true,
//             limpieza:false,
//             bebidas:false,
//         } 
//     },{
//         Código: 1, 
//         Nombre:"DETERGENTE",
//         precio: 100,
//         categoría: {
//             lacteo:false,
//             limpieza:true,
//             bebidas:false,
//         } 
//     },{
//         Código: 2, 
//         Nombre:"queso",
//         precio: 2000,
//         categoría: {
//             lacteo:true,
//             limpieza:false,
//             bebidas:false,
//         } 
//     },{
//         Código: 3, 
//         Nombre:"cerveza",
//         precio: 320,
//         categoría: {
//             lacteo:false,
//             limpieza:false,
//             bebidas:true,
//         } 
//     },{
//         Código: 4, 
//         Nombre:"coca cola",
//         precio: 654,
//         categoría: {
//             lacteo:false,
//             limpieza:false,
//             bebidas:true,
//         } 
//     },{
//         Código: 5, 
//         Nombre:"jabon",
//         precio: 350,
//         categoría: {
//             lacteo:false,
//             limpieza: true,
//             bebidas:false,
//         } 
//     },{
//         Código: 6, 
//         Nombre:"esponja",
//         precio: 20,
//         categoría: {
//             lacteo:false,
//             limpieza:true,
//             bebidas:false,
//         } 
//     },{
//         Código: 7, 
//         Nombre:"yogurt",
//         precio: 900,
//         categoría: {
//             lacteo:true,
//             limpieza:false,
//             bebidas:false,
//         } 
//     },{
//         Código: 8, 
//         Nombre:"queso rallado",
//         precio: 300,
//         categoría: {
//             lacteo:true,
//             limpieza:false,
//             bebidas:false,
//         } 
//     }
// ]
// const productosSuper2 = productosSuper
// console.log(productosSuper)
// productosSuper.splice(3,1,{'codigo': 9, 'nombre': "pan dulce", 'precio': 2500,'categoria':{'lacteo': false,'limpieza': false, 'bebidas': true}})

//------punto4----------
precio_nuevo = 0;
const deptos = [
    {
        Cod_Inm:1,
        superficie: 50,
        pre_alqu: 250.35,
        disp:true
    },{
        Cod_Inm:2,
        superficie: 150,
        pre_alqu: 5500.35,
        disp:true
    },{
        Cod_Inm:3,
        superficie: 500,
        pre_alqu: 78000.35,
        disp:true
    }
]
console.log(deptos)
// deptos.forEach(function(deptos) {
//     cod_depto = 2;
//     if (deptos.Cod_Inm === cod_depto){
//        deptos.disp = false
//        precio_nuevo= deptos.pre_alqu *12/100
//        deptos.pre_alqu = precio_nuevo + deptos.pre_alqu
//     }
// })

const deptos2 = deptos.map(function(depto){
    cod_depto = 2;
    if (depto.Cod_Inm === cod_depto){
       depto.disp = false
       precio_nuevo= depto.pre_alqu *12/100
       depto.pre_alqu = precio_nuevo + depto.pre_alqu
       
    } 
})
console.log(deptos2)