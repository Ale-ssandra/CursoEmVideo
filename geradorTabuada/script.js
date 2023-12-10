function calcular() {
  var valor = document.getElementById("valor");
  var tabuada = document.getElementById("tabuada");

  if (valor.value == "") {
    alert("Digite um numero");
  } else {
      tabuada.innerHTML = "" // ele vai limpar oq vai aparecr no select pra depois rodar tudo no for
      for (var t = 1; t <= 10; t++) {
      var resu = t * valor.valueAsNumber;

      // item foi uma variavel criada para ter elementos dentro do select depois para ser chamada dentro do select
       var item = document.createElement("option")
       item.text = `${valor.value} x ${t} = ${resu}`
       tabuada.appendChild(item)
  }
}}
