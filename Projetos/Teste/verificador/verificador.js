function verificar() {
  var res = window.document.getElementById('res')
  var anoN = window.document.getElementById('textIdd')
  var data = new Date()
  var anoT = data.getFullYear()
  if (anoN.value.length == 0 || anoN.value > anoT){
    window.alert ('Dados não compativeis. Tente novamente.')
  } else {
    var img = window.document.getElementById('img')
    var sex = window.document.getElementsByName('sex')
    var idd = anoT - Number(anoN.value)
    if (sex[0].checked){ //homem
      var genero = 'homem'
      if (idd > 23){//adulto
      img.src = '../imagens/IMGadulto-homem~2.jpg'
      }else if (idd <= 23 && idd >= 15){//jovem
        img.src = '../imagens/IMGjovem-homem~2.jpg'
      } else if (idd < 15) {
       img.src = '../imagens/IMGcriança-homem~2.jpg'
      }
    } else if (sex[1].checked){ // mulher
      var genero = 'mulher'
      if (idd > 23){//adulto
        img.src = '../imagens/IMGadulto-mulher~2.jpg'
      } else if (idd <= 23 && idd >= 15){//jovem
        img.src = '../imagens/IMGjovem-mulher~2.jpg'
  } else if (idd < 15) {
        img.src = '../imagens/IMGcriança-mulher~2.jpg'
      }
    }
  res.innerHTML = `voce é ${genero} com a idade de ${idd} anos`
}
    }
