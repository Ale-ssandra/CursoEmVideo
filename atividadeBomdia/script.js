function carregar() {
  var msg = document.getElementById("horario");
  var img = document.getElementById("img");
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();
  msg.innerHTML = `Agora são ${hora}:${minutos} horas.`;
  if (hora >= 0 && hora < 12) {
    img.src = "img/manha.jpg";
    document.body.style.background = "#dc7f00";
  } else if (hora >= 12 && hora < 18) {
    img.src = "img/tarde.jpg";
    document.body.style.background = "#8bbac4";
  } else {
    img.src = "img/noite.jpg";
    document.body.style.background = "#041a2b";
  }
}
