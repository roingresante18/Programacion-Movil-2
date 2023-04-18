const estudiantes =["rodrigo", "alejandro", "pedro", "juan"]
const estudiantesNotas = [
    {
        nota1:5,
        nota2:2,
        nota3:8.5,
        nota4:6,
        nota5:9
    },
    {
        nota1:5,
        nota2:0,
        nota3:8,
        nota4:6.5,
        nota5:10
    },
    {
        nota1:5,
        nota2:10,
        nota3:8.5,
        nota4:10,
        nota5:9
    },
    {
        nota1:5,
        nota2:2,
        nota3:6.3,
        nota4:6,
        nota5:6
    }
]
const estudiantesNotas2 = [
    [
        5, 2, 8.5, 6, 9
    ],
    [
        5,8,8,10,6.5
    ],
    [
        3,5,5.5,6,8,
    ],
    [
        4.5,8,9,10,6
    ]
]

// console.log(estudiantesNotas2)
//-------------------------punto 1 -------------------

 const resultado = estudiantesNotas2.reduce((total,numero)=>numero +" abc "+ total,0)
    console.log(resultado)
estudiantesNotas2.forEach(nota=>{

})

// const punto1 = estudiantesNotas2.map(nota =>{
//     promedio = nota.
//     return promedio
// })



let comparador = 0;
for(let i = 0; i < resultado; i++){
    console.log( estudiantes[i] + " tiene un promedio de: "+ punto1[i])
    comparador = comparador + 1;
    if(punto1[i] >comparador){
        mayor= punto1[i]
        comparador = punto1[i]
        alumno= estudiantes[i]
    }   
 }

// const mejorEstudiante = punto1.filter(prom=>{
//     comparador = comparador + 1;
//     if(prom>comparador){
//         mayor = prom
//         comparador = prom
//     } 
//     return prom
// } )
// console.log(mejorEstudiante)


// console.log("el ALUMNO  "+ alumno+ " tiene el mayor promedio de: " +mayor)

// //-------------------------punto 2-------------------
// const mayorDef = punto1.map(function(nota){
//     nota.n
// })