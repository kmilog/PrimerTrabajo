// const argv = require('yargs').argv

// console.log(argv.Matematicas);  
// console.log('EL nombre del estudiantes es ' + argv.Nombre);  
const opciones = {
    Nombre : {
        default : 'Camilo',
        alias : 'n'
    },
    Matematicas : {
        default : 0,
        alias : 'm'
    },
    Ingles : {
        default : 0,
        alias : 'i'
    },
    Programacion : {
        demand : 0, // Hace el campo obligatorio
        alias : 'p'
    },
}

// const argv = require('yargs')
//             .command ('Promedio','Calcular el promedio', opciones)
//             .argv

// console.log(argv.Matematicas);
// console.log(argv);
// console.log('El promedio es ' + ((argv.m + argv.i + argv.p)/3));

let ObtenerPromedio = (notaUno, notaDos, notaTres) => ((notaUno + notaDos + notaTres)/3);

const argv = require('yargs')
            .command ('Promedio','Calcular el promedio', opciones)
            .argv

module.exports = {ObtenerPromedio, argv};