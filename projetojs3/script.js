function contar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if( inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0){
        window.alert('Digite novamente!')
    }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo inválido! Considerando Passo como 1')
            p = 1
        }

        if(i < f){
            for(var cont = i; cont <= f; cont += p){
                res.innerHTML +=` ${cont} \u{1F449}`
            }
        }else{
            for( var cont = i; cont >= f; cont-= p){
                res.innerHTML +=` ${cont} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3c1}`
    }
}