// olá, mundo!
/* let mensagem = "olá, mundo!"
console.log(mensagem); */

/* const mensagem = "olá eu"

{
    const mensagem = "olá, mundo!"
    console.log(mensagem)
}

console.log(mensagem); */

// arrays, objetos
/* let metas = [2, "alô"] */
/* let metas = ["mark", "alô"]

console.log(metas[1] + ", " + metas[0]) */

/* let meta = {
    value: 'ler um livro por mês',
    address: 2,
    checked: false,
/*     isChecked: (info) => {
        console.isChecked(info)
    }, */
/*     log: (info) => {
        console.log(info)
    } */

/* } */ 
/* meta.value = "não é mais ler um livro" */
/* meta.log(meta.value) */
/* console.log(meta.value) */


// function  // arrow function
/* const criarMeta = () => {} */

/* function criarMeta() {} */

/* let meta = {
    value: 'ler um livro por mês',
    checked: true,
}

let metas = [
    meta,
    {
        value: "caminhar 20 minutos todos os dias",
        checked: false
    }
]

console.log(metas[1].value) */


/* function start() {
    console.log('comecou')
}

start() */

/* const start = () => {
    console.log('comecou')
}

start() */

/* const start = () => {
    let count = 0
    while(count < 10){
        console.log(count)
        count = count + 1
    }
}

start() */

const start = () => {
    while(true){
        let opcao = "sair"
        switch(opcao) {
            case "cadastrar":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                return    
        }
    }
}

start()