// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)
// Esto solo se aplica a modulos nativos que no tienen promesas nativas 

const fs = require('node:fs/promises')


console.log('Leyendo primer archivo...')
fs.readFile('./archivo.txt', 'utf-8')  
    .then(text => {
        console.log(`primer texto `,text)
    })
    .catch(err => {
        console.log(err)
    })

console.log(`Haciendo cosas mientras se lee el archivo...`) 

console.log('Leyendo segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log("segundo texto ",text)
    })
    .catch(err => {
        console.log(err)
    })

