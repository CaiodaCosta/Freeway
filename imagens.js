// configurações de mostra veiculos
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;
let imagemDoAtor;
let imagemDaEstrada;
let somDaColisao;
let somDaTrilha;
let somDosPontos;


function preload(){
imagemDoCarro1= loadImage("Imagens/carro-1.png");
imagemDoCarro2 = loadImage("Imagens/carro-2.png");
imagemDoCarro3= loadImage("Imagens/carro-3.png");
imagemCarros = [imagemDoCarro1,imagemDoCarro2,imagemDoCarro3,imagemDoCarro1,imagemDoCarro2,imagemDoCarro3]
imagemDaEstrada = loadImage("Imagens/estrada.png");
imagemDoAtor = loadImage("Imagens/ator-1.png");
somDaColisao = loadSound("Sons/colidiu.mp3");
somDaTrilha = loadSound("Sons/trilha.mp3");
somDosPontos = loadSound("Sons/pontos.wav");




}
