import express from 'express'
import bancoDedados from './repository'

const app = express()

app.get("/api/v1/nome", (req, res) => {
    const id = req.query.id
    const nome = req.query.nome

    if(!id || !nome) {
        req.status(400).send({ message: "nome invalido!" })
    }

    const cachorro = {
        id,
        nome
    }

    bancoDedados.push(cachorro)

    res.status(200).send({ message: "doguinho adicionado com sucesso!"})
})

app.get("/api/v1/raça", (req, res) => {
    const id = req.query.id
    const raça = req.query.raça

    if(!id || !raça) {
        req.status(400).send({ message: "raça de doguinho invalida!"})
    }

    const cachorro = {
        id,
        raça
    }

    bancoDedados.push(cachorro)

    res.status(200).send({ message: "raça do doguinho adicionada com sucesso!"})
})

app.get("/api/v1/idade", (req, res) => {
    const id = req.query.id
    const idade = req.query.idade

    if(!id || !idade) {
        req.status(400).send({ message: "idade do doguinho invalida!"})
    }

    const cachorro = {
        id,
        idade
    }

    bancoDedados.push(cachorro)

    res.status(200).send({ message: "idade do doguinho adicionada com sucesso!"})
})

app.get("/api/nome1", (req, res) => {
    res.send({ cachorro: bancoDeDados })
})

app.get("/api/raça1", (req, res) => {
    res.send({ cachorro: bancoDeDados })
})

app.get("/api/idade1", (req, res) => {
    res.send({ cachorro: bancoDeDados })
})

app.get("/api/nome2/:id", (req, res) => {
    const id = req.params.id
    const cachorro = bancoDeDados.find(it => it.id == id)
    if (!cachorro) {
        res.send({ message: "doguinho não encontrado" })
        return
    }
    res.send({ cachorro })
})

app.get("/api/raça2/:id", (req, res) => {
    const id = req.params.id
    const cachorro = bancoDeDados.find(it => it.id == id)
    if (!cachorro) {
        res.send({ message: "doguinho não encontrado" })
        return
    }
    res.send({ cachorro })
})

app.get("/api/idade2/:id", (req, res) => {
     const id = req.params.id
    const cachorro = bancoDeDados.find(it => it.id == id)
    if (!cachorro) {
        res.send({ message: "doguinho não encontrado" })
        return
    }
    res.send({ cachorro })
})

app.get("/api/nome3/:id", (req, res) => {
    const id = req.params.id
    const { nome } = req.query
    const cachorro = bancoDeDados.find(it => it.id == id)
    if(!cachorro) {
        res.send({ message: "Favor informar nome do doguinho" })
        return 
    }
    cachorro.nome = nome
    res.send({ message: "doguinho alterado com sucesso" })
})

app.get("/api/raça3/:id", (req, res) => {
    const id = req.params.id
    const { raça } = req.query
    const cachorro = bancoDeDados.find(it => it.id == id)
    if(!cachorro) {
        res.send({ message: "Favor informar raça do doguinho" })
        return 
    }
    cachorro.raça = raça
    res.send({ message: "doguinho alterado com sucesso" })
})

app.get("/api/idade3/:id", (req, res) => {
    const id = req.params.id
    const { idade } = req.query
    const cachorro = bancoDeDados.find(it => it.id == id)
    if(!cachorro) {
        res.send({ message: "Favor informar raça do doguinho" })
        return 
    }
    cachorro.idade = idade
    res.send({ message: "doguinho alterado com sucesso" })
})

app.get("/api/nome4/:id", (req, res) => {
    const id = req.params.id
    const cachorro = bancoDeDados.find(it => it.id == id)
    if(!cachorro) {
        res.send({ message: "Favor informar id e nome" })
        return 
    }
    bancoDeDados.splice(it => it.id == id, 1)
    res.send({ message: "registro deletado com sucesso" })
})
app.listen(3000,() => {
    console.log("bah ta funcionando 3000")
});