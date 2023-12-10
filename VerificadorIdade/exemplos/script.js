function verificar() {
  var data = new Date();
  var anoAtual = data.getFullYear();
  var inputAno = document.getElementById("anoNasc");
  var ano = document.getElementById("h3");
  var inputAno = anoNasc.valueAsNumber;
  var dataNasc = anoAtual - inputAno;
  var sex = document.getElementsByName("sex");
  if (inputAno.length == 0 || inputAno > anoAtual) {
    window.alert("[Error]  verifique os dados e digite novamente!");
  } else {
    var foto = document.createElement("img");
    foto.setAttribute("id", "foto");
    foto.style.maxWidth = '200px';
  
    if (sex[0].checked) {
      sex = "masculino";
      if (dataNasc >= 0 && dataNasc <= 15) {
        foto.setAttribute("src", "img/menino.jpg");
      } else if (dataNasc > 15 && dataNasc <= 29) {
        foto.setAttribute("src", "img/jovem.jpg");
      } else if (dataNasc >= 30 && dataNasc <= 59) {
        foto.setAttribute("src", "img/homem.jpg");
      } else if (dataNasc > 59) {
        foto.setAttribute("src", "img/homemVelho.jpg");
      }
    } else if (sex[1].checked) {
      sex = "feminino";
      if (dataNasc >= 0 && dataNasc <= 15) {
        foto.setAttribute("src", "img/menina.jpg");
      } else if (dataNasc > 15 && dataNasc <= 29) {
        foto.setAttribute("src", "img/jovemMulher.jpg");
      } else if (dataNasc >= 30 && dataNasc <= 59) {
        foto.setAttribute("src", "img/mulher.jpg");
      } else if (dataNasc > 59) {
        foto.setAttribute("src", "img/mulherVelha.jpg");
      }
    }
  }
  ano.innerHTML = `Dectemos que voce tem ${dataNasc} anos, é genero ${sex} `;
  ano.appendChild(foto);
}
