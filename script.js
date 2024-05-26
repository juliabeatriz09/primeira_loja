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

function troca_imagem() {
    var coracao = document.getElementById('like');

    if(coracao.scr.match("imagens/coracao.png")){
        coracao.scr = "imagens/coracaoo.png";
    }
    else{
        coracao.scr = "imagens/coracao.png"
    }
}

