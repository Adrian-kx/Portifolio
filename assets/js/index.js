(function () {
  function desativarDragDrop() {
    document.addEventListener('dragstart', (evento) => evento.preventDefault(), false)
    document.addEventListener('drop', (evento) => evento.preventDefault(), false)
  }
  desativarDragDrop()
}())

//o que vai ser escrito no Home

var texto = "Desenvolvedor Web Front End.";
var tempoEscrita = 100;

var elementoTexto = document.getElementById("animationTextHome");
var indiceCaractere = 0;

function escreverTexto() {
  elementoTexto.textContent += texto.charAt(indiceCaractere);
  indiceCaractere++;

  if (indiceCaractere < texto.length) {
    setTimeout(escreverTexto, tempoEscrita);
  }
}

escreverTexto();

// tempo de subida e descida da imagem no home
setTimeout(function () {
  var imagem = document.getElementById("imgAnimationHome");
  imagem.style.animationPlayState = "running";
}, 2000);


// header fixo

window.addEventListener('scroll', function () {
  var header = document.getElementById('header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});