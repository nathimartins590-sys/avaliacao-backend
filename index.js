import express from 'express'
import bancoDedados from './repository/index.js';

const app = express()

app.get('/api/v1/doguinho/:id', (req, res) => {

    const id = req.params.id
    const cachorro = bancoDedados.find(it => it.id == id)

    if (!cachorro) {

        res.send({ message: "doguinho nao encontrado  " })

        return
    }
    res.send({ cachorro })
})

app.get('/api/v1/dog-delt/:id', (req, res) => {

    const id = req.params.id
    const cachorro = bancoDedados.find(it => it.id == id)

    if (!cachorro) {

        res.send({ message: "doguinho nao encontrado  " })

        return
    }
    res.send({ cachorro }) = 0
})

app.get('/api/v1/dog-edit/:id/:alterar', (req, res) => {

    const id = req.params.id
    const alterar = req.params.alterar
    const cachorro = bancoDedados.find(it => it.id == id)

    if (!cachorro) {

        res.send({ message: "doguinho nao encontrado  " })

        return
    }
    res.send({ nome }) = alterar
})

app.get('/api/v1/dog', (req, res) => {

    const { id, nome } = req.query

    bancoDedados.push({ id, nome })

    console.log(bancoDedados)

    if (!id || !nome) {
        res.send({ message: "Favor informar id e o nome do doguinho  " })
        return
    }

    res.send({ message: "Doguinho criado com sucesso! " })

})

app.listen(3000, () => {
    console.log("servidor escutando 3000")

})