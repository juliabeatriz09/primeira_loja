// inicio alerta
function ola() {
    nome = prompt(" nome ");
    alert(nome);
}
// fim alerta

// inicio troca de imagem
function troca_item() {
    var coracao = document.getElementById('like');

    if(coracao.src.match("imagens/coracao.png")){
        coracao.src = "imagens/coracaoo.png";
    }
    else {
        coracao.src = "imagens/coracao.png";
    }

}
// fim troca de imagem
