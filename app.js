const express = require('express');
const app = express();

// Rota para a raiz do servidor
app.get('/', (req, res) => {
    res.send('Bem-vindo à calculadora! Use a seguinte sintaxe para realizar operações: /calculadora/<operacao>/<num1>/<num2>');
});

// Rota para calcular o resultado da operação
app.get('/calculadora/:operacao/:num1/:num2', (req, res) => {
    const operacao = req.params.operacao;
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    let resultado;

    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            resultado = num1 / num2;
            break;
        default:
            resultado = 'Operação inválida';
    }

    res.send(`O resultado da operação ${operacao} entre ${num1} e ${num2} é: ${resultado}`);
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
