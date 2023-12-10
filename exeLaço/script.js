function contar() {
  var inicio = document.getElementById("inicio");
  var fim = document.getElementById("fim");
  var passos = document.getElementById("passos");
  var resultado = document.getElementById("resultado");
  var inicio = inicio.valueAsNumber;
  var fim = fim.valueAsNumber;
  var passos = passos.valueAsNumber;
     
  for (var c = inicio; c <= fim;  c += passos) {
    resultado.append(c,"😊")
    console.log(c)
  }
  
}
