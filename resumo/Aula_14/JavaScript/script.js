function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 2){
                //Bebe
                img.setAttribute('src', './imagens/bebe-menino.jpg')

            } else if (idade < 10){
                //Criança
                img.setAttribute('src', './imagens/menino.jpg')
            } else if (idade < 18){
                //Jovem
                img.setAttribute('src', './imagens/Homem-jovem.jpg')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', './imagens/Homem-Adulto.jpg')
            } else{
                // Idoso
                img.setAttribute('src', './imagens/Homem-Idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <2){
                //Bebe
                img.setAttribute('src', './imagens/Bebe-Menina.jpg')
            } else if (idade < 10){
                //Criança
                img.setAttribute('src', './imagens/Menina.jpg')
            } else if (idade < 18){
                //Jovem
                img.setAttribute('src', './imagens/Menina-Jovem.jpg')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', './imagens/Mulher-Adulta.jpg')
            } else{
                // Idoso
                img.setAttribute('src', './imagens/Mulher-Idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}