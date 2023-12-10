var a = [2,3,7]
let posiçao = a.indexOf(9)
// buscar valor do vetor e ele mostarar qual posiçao esta
console.log(posiçao)
// console.log(a)
// a[3] = 6 // aqui é para caso voce queira add um valor o tres representa a chave
// a.push(8)// esse metodo para add um valor sem querer saber posiçao final
// console.log(a.length)// saber tamanho do vetor
// console.log(`o primeiro valor do vetor é ${a[0]}`)
// a.sort
// console.log(a)

// mostrar o vetor com for
//esse pos <a.length vai faaer a repetiçao sem saber o tamnho do array
// for(let pos=0;pos<a.length;pos++){
//     // console.log([pos]) // assim so mostra a posiçao
//     console.log(` A posição ${pos} corresponde ao valor ${a[pos]}`) // vai mostrar o array e suas posicoes 
// }
for(let pos in a){
    console.log(a[pos])
}
//um jeito mais simples de mostrar arrays
//teste


