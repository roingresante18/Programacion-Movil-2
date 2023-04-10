// const limpieza1 = {
//     id: 1,
//     nombre: "detergente",
//     detalle: "detergente concentrado tipo limon",
//     precio: "$2.500.00",
//     stock: 10,
//     fabricante : {
//         nombreEmpresa: "Empresa1",
//         ubicacion:"bs as",
//         celular: 376454654
//     },
//     sucursal: [
//         "avellaneda",
//         "centro",
//         "25 de mayo"
//     ]
// }
// const limpieza2 ={
//     id: 2,
//     nombre: "Jabon Liquido",
//     detalle: "descripcion 2",
//     precio: "$2.000.00",
//     stock: 100,
//     fabricante : {
//         nombreEmpresa: "Empresa12",
//         ubicacion:"Posadas",
//         celular: 376454654
//     },
//     sucursal: [
//         "avellaneda",
//         "centro",
//     ]
// }
// const objeto1 = limpieza1.fabricante.nombreEmpresa;
// const {nombre, fabricante:{ubicacion}, sucursal}= limpieza2;
// console.log(objeto1)
// console.log(nombre, ubicacion, sucursal[0])

//------------punto1----------
// const ciudad ={

// }
// const persona ={
//     nombre:"julio",
//     apellido:"galarza",
//     edad: 54,
//     cuil: 2536533666,
// }
// persona.domicilio = "carlos gardel";
// persona.telefono = 37645666;
// persona.nombre  = "PABLO"
// delete persona.nombre;
// console.log(persona);

//---------------punto2-----destructuring 
// const {nombre, apellido, telefono} = persona
// console.log(nombre, apellido, telefono);

//---------------punto3-------------
const proveedor ={
    nombre: "empresa1",
    telefono: 37646565,
    descr:"rubros varios"
}
const ciudad ={
    nombreCiudad: "posadas",
    provincia: "misiones"
}
const union= Object.assign(ciudad, proveedor)
console.log(union);
const union2= {...union, pais:"argentina",...proveedor}
console.log(union2);
