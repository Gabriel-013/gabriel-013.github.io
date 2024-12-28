
function carregar() {
var data = new Date
var hora = data.getHours()
if (hora >= 6 && hora < 18){//dia
document.body.style.background = '#d7d202'
} else if (hora >= 18 || hora < 6){//noite
document.body.style.background = '#2a2a2a'
}
}

function resultado() {
var n = window.document.getElementById('n1')
var r = window.document.getElementById('r1')
if (n.value.length == 0){
window.alert ('[ERROR]!')
} else {
var n1 = Number(n.value)
for (var c = 0; c <= 10; c++){
let item = document.createElement('option')
item.text = `${n1} * ${c} = ${n1*c}`
r.appendChild(item)
}
}
}
