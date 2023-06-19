var listaImagens = [];
var links = [];
var i = 0;

while (i < listaImagens.length) {
  document.write('<a href=' + links[i] + '>' + '<img src=' + listaImagens[i] + '>' + '</a>');
  i++;
}

function adicionarImagem(){
  var imagemFavorito = document.getElementById('imagem').value;
  var elementoListaImagens = document.getElementById('listaImagens');
    
  if (imagemFavorito.endsWith('.jpg' || '.png' || '.jpeg' || '.svg')){
    elementoListaImagens.innerHTML = elementoListaImagens.innerHTML + '<img src="' + imagemFavorito + '">';
  } else {
    alert("Imagem inválida");
  }
  document.getElementById('imagem').value = "";
}

function adicionarUserImagem() {
  var imagemInput = document.getElementById('userImagem');
  var imagemArquivo = imagemInput.files[0];
  var elementoListaImagens = document.getElementById('listaImagens');

  if (imagemArquivo) {
    var novaImagem = document.createElement('img');
    novaImagem.src = URL.createObjectURL(imagemArquivo);
    elementoListaImagens.appendChild(novaImagem);
  } else {
    alert("Nenhum arquivo selecionado");
  }

  imagemInput.value = "";
}