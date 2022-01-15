function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(Number(fano.value.length) == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'menino.png')
            }else if(idade < 21){
                img.setAttribute('src', 'jovemhomem.png')
            }else if(idade < 60){
                img.setAttribute('src', 'homem.png')
            }else{
                img.setAttribute('src', 'idosohomem.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'menina.png')
            }else if(idade < 21){
                img.setAttribute('src', 'jovemulher.png')
            }else if(idade < 60){
                img.setAttribute('src', 'mulher.png')
            }else{
                img.setAttribute('src', 'idosamulher.png')
            }

        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }



}