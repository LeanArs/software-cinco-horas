express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor!');
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});
