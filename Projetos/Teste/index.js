function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var h = window.document.getElementById('h')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
//aqui fica o leitor de hora
if (hora >= 0 && hora < 12){
//bom dia
h.innerHTML = `Bom dia`
document.body.style.background = '#dede12'
img.src = 'imagens/IMGfundo-manhã~2.jpg'
} else if ( hora >= 12 && hora < 18){
//boa tarde
h.innerHTML = `Boa tarde`
document.body.style.background = '#f0a341'
img.src = 'imagens/IMGfundo-tarde~2.jpg'
} else {
//boa noite
h.innerHTML = `Boa noite`
document.body.style.background = "#5e5e5e"
img.src = 'imagens/IMGfundo-noite~2.jpg'
}
}
