const {ObtnerPromedio, argv} = require('./Archivo');

console.log(argv);
if(argv._[0] == 'Promedio'){
    console.log('El promedio de ' + argv.n + 'es');
}else{
    console.log('Promedio no calculado');
}