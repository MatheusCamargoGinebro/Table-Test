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

function mudarNome(i) {
	var newName = window.prompt("Digite um novo nome para o jogo.");
	Games[i].NomeJogo = newName;
	listar(Games[i].Genero);
}

function mudarProdutora(i) {
	var newProducter = window.prompt("Digite uma nova produtora para o jogo.");
	Games[i].Produtora = newProducter;
	listar(Games[i].Genero);
}

function mudarPersonagem(i) {
	var newCharacter = window.prompt("Digite um novo personagem para o jogo.");
	Games[i].Personagem = newCharacter;
	listar(Games[i].Genero);
}

function mudarPlataforma(i) {
	var newPlat = window.prompt("Digite uma nova plataforma para o jogo.");
	Games[i].Plataforma = newPlat;
	listar(Games[i].Genero);
}


function listar(Genero) {
    var i;
    var TabelContent = document.getElementById('tabelaGames');
    var Content = "<table class='table'>";

    Content += "<tr><th>Nome do jogo</th><th>Produtora</th><th>Personagem</th><th>Plataforma</th><th>Genero</th></tr>";

    for (i = 0; i < Games.length; i++) {
        if (Games[i].Genero == Genero) {
            Content += "<tr><td><a href='#secao2' onclick='mudarNome("+i+")'>" + Games[i].NomeJogo + "</a></td>";
            Content += "<td><a href='#secao2' onclick='mudarProdutora("+i+")'>" + Games[i].Produtora + "</a></td>";
            Content += "<td><a href='#secao2' onclick='mudarPersonagem("+i+")'>" + Games[i].Personagem + "</a></td>";
            Content += "<td><a href='#secao2' onclick='mudarPlataforma("+i+")'>" + Games[i].Plataforma + "</a></td>";
            Content += "<td>" + Games[i].Genero + "</a></td>";
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