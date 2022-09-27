function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 8
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora <12){
        //Bom Dia!
        imagem.src = 'imagens/fotomanha.jpg'
        document.body.style.background = '#fbe697'
    } else if (hora >=12 && hora <18){
        //Boa Tarde!
        imagem.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#fc5d01'
    }else {
        //Boa Noite!
        imagem.src = 'imagens/fotonoite.jpg'
        document.body.style.background = '#151723'
    }
}