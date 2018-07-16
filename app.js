const argv = require('./config/yargs').argv;
const { crearArchivo, listar } = require('./multiplicar/multiplicar');

let comando = argv._[0]; //posicion del arreglo donde queda el comando o el parámetro

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
}

