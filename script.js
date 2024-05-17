function ola() {
    nome = prompt(" nome ");
    alert(nome);
}

function troca_item() {
    var coracao = document.getElementById('like');

    if(coracao.src.match("imagens/coracao.png")){
        coracao.src = "imagens/coracaoo.png";
    }
    else {
        coracao.src = "imagens/coracao.png";
    }

}