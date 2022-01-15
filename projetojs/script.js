
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >=0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#785f42'
    }else if(hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#a8865a'
    }
    else{
        img.src = 'noite.png'
        document.body.style.background = '#1d4d61'
    }
}