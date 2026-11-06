const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.send('Envie os parâmetros n1 e n2 para as rotas /soma, /subtracao, /multiplicacao ou /divisao')
})

app.get('/soma', (req, res) => {
    let result = parseFloat(req.query.n1) + parseFloat(req.query.n2)
    if (isNaN(result)) {
        result = "Valores inválidos."
    } else {
        result = `${req.query.n1} + ${req.query.n2} = ${result}`
    }
    res.send({ conta: result })
})


app.get('/subtracao', (req, res) => {
    let result = parseFloat(req.query.n1) - parseFloat(req.query.n2)
    if (isNaN(result)) {
        result = "Valores inválidos."
    } else {
        result = `${req.query.n1} - ${req.query.n2} = ${result}`
    }
    res.send({ conta: result })
})

app.get('/multiplicacao', (req, res) => {
    let result = parseFloat(req.query.n1) * parseFloat(req.query.n2)
    if (isNaN(result)) {
        result = "Valores inválidos."
    } else {
        result = `${req.query.n1} * ${req.query.n2} = ${result}`
    }
    res.send({ conta: result })
})


app.get('/divisao', (req, res) => {
    let n1 = parseFloat(req.query.n1)
    let n2 = parseFloat(req.query.n2)

    if (isNaN(n1) || isNaN(n2)) {
        res.send({ conta: "Valores inválidos." })
        return
    }

    if (n2 === 0) {
        res.send({ conta: "Não é possível dividir por zero." })
        return
    }

    let result = n1 / n2
    res.send({ conta: `${n1} / ${n2} = ${result}` })
})

app.listen(8080)