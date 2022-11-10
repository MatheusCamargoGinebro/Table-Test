class Jogo{
    constructor(NomeJogo, Produtora, Personagem, Plataforma, Genero){
        this.NomeJogo = NomeJogo;
        this.Produtora = Produtora;
        this.Personagem = Personagem;
        this.Plataforma = Plataforma;
        this.Genero = Genero;
    }
}

var Games = [];
Games[0] =  new Jogo ("Uncharted", "Naughty Dog", "Nathan Drake.", "Playstation", "Aventura");
Games[1] =  new Jogo ("Assassin's Creed", "Ubisoft", "Desmond Miles", "Playstation", "Outro");
Games[2] =  new Jogo ("Gran Turismo", "Polyphony Digital", "Simulador", "Playstation", "Corrida");
Games[3] =  new Jogo ("Forza Horizon 5", "Playground Games", "Simulador", "Xbox", "Corrida");
Games[4] = new Jogo ("Tetris", "Andromeda", "Não há", "Multiplataforma", "Puzzle");
Games[5] = new Jogo ("The Last of Us", "Naughty Dog", "Joel Miller", "Playstation", "Ação");


/*------------------------------- FUNÇÕES -------------------------------*/
function Cadastrar() {
    tocar();
    var e = new Jogo(NomeJogo.value, Produtora.value, Personagem.value, Plataforma.value, Genero.value);
    Games.push(e);
    alert("Novo jogo adicionado ao banco de dados!");
    NomeJogo.value = "";
    Produtora.value = "";
    Personagem.value = "";
    Plataforma.value = "";
}


function mudarPlataforma(i) {
	var newplat = window.prompt("Digite uma nova plataforma para o jogo.");
	Games[i].Plataforma = newplat;
	listar(Games[i].Genero);
}


function listar(Genero) {
    var i;
    var TabelContent = document.getElementById('tabelaGames');
    var Content = "<table class='table'>";

    Content += "<tr><th>Nome do jogo</th><th>Produtora</th><th>Personagem</th><th>Plataforma</th><th>Genero</th><th>Mudar plataforma</th></tr>";

    for (i = 0; i < Games.length; i++) {
        if (Games[i].Genero == Genero) {
            Content += "<tr><td>" + Games[i].NomeJogo + "</td>";
            Content += "<td>" + Games[i].Produtora + "</td>";
            Content += "<td>" + Games[i].Personagem + "</td>";
            Content += "<td>" + Games[i].Plataforma + "</td>";
            Content += "<td>" + Games[i].Genero + "</td>";
            Content += "<td><a href='#secao2' onclick='mudarPlataforma("+i+")'>Mudar</a></td></tr>";
        }
    }
    Content += "</table>";
    TabelContent.innerHTML = Content;
}













/*---------------------------- não faz parte da atividade :D ----------------------------*/

function tocar(){
    var audio = document.querySelector('audio');
    audio.play();
}