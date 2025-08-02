function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 3) {
                //bebe
                img.setAttribute('src', 'foto-bebe-m.jpg')
            } else if (idade <= 11) {
                // criança
                img.setAttribute('src', 'foto-criança-m.jpg')
            } else if (idade > 11 && idade <= 17) {
                //adolecente
                img.setAttribute('src', 'foto-adolecente-m.jpg')
            } else if (idade >= 18 && idade <= 59) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 3) {
                //bebe
                img.setAttribute('src', 'foto-bebe-F.jpg')
            } else if (idade <= 11) {
                // criança
                img.setAttribute('src', 'foto-criança-F.jpg')
            } else if (idade > 11 && idade <= 17) {
                //adolecente
                img.setAttribute('src', 'foto-adolecente-F.jpg')
            } else if (idade >= 18 && idade <= 59) {
                //adulto
                img.setAttribute('src', 'foto-adulto-F.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-F.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}