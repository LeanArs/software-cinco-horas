const server = require('./server');
const mainRoutes = require('./routes/index');

server.use('/', mainRoutes);

console.log('Aplicativo inicializado.');

setTimeout(() => {
    console.log('Função após 5 segundos.');
}, 5000);

