//var jogo = new JogoXadrez();
let jogo = new Tabuleiro();
let vezJogador = "W";
jogo.colocarPecas();

function init() {
	gerar_tabuleiro();
	atualizar_jogo();
}

function select(i,j) {

	var tabuleiro = document.getElementById('tabuleiro');
	var obj = tabuleiro.rows[i].cells[j]

	if (select.obj_clicado === undefined || select.obj_clicado === null) {
		
		if(i >= 0 && i <= 7 && j >= 0 && j <= 7)
			var peca = jogo.peca(i, j);

		if (peca == null)
			return;

		if(peca.tipo != vezJogador){
			if(vezJogador != 'F')
				alert(vezJogador == 'B' ? "É a vez do jogador preto" : "É a vez do jogador branco");
			else
				alert("Jogo encerrado!\n Caso deseje jogar novamente clique no botão \"Reiniciar Jogo\"");	
			return;
		}

		select.obj_clicado = obj;
		select.obj_bgcolor = obj.style.backgroundColor;
		select.peca = peca;
		obj.style.backgroundColor = "green";

	} else if (jogo.moverPeca(select.peca, i, j)) {

		select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
		select.obj_clicado = null;
		
		if(jogo.ganhador != 0){
			if(jogo.ganhador == 'W'){
				alert("Vitoria para as pecas brancas!");
				vezJogador = 'F';
			}else{
				alert("Vitoria para as pecas pretaas!");
				vezJogador = 'F';
			}
		}else{
			if(vezJogador == 'W')
				vezJogador = 'B';
			else
				vezJogador = 'W';
		}

		atualizar_jogo();

	} else {

		alert("Movimento invalido!");
		select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
		select.obj_clicado = null;
		
	}
}

function atualizar_jogo() {
	const pecas = ["", "♔", "♕", "♖", "♗", "♘", "♙", "♚", "♛", "♜", "♝", "♞", "♟"];
	let tabuleiro = document.getElementById('tabuleiro');
	let tabData = jogo.tabuleiro;

	for (var i = 0, n = tabuleiro.rows.length; i < n; i++) {
		for (var j = 0, m = tabuleiro.rows[i].cells.length; j < m; j++) {
			obj = tabuleiro.rows[i].cells[j]
				obj.innerHTML = pecas[tabData[i][j]];
		}
	}
}

function reiniciar_jogo() {
	jogo.reiniciar();
	atualizar_jogo();
	//location.reload();
}

function gerar_tabuleiro() {
	var table = "<table id=\"tabuleiro\">";
	var color = false;

	for (var i = 0; i < 8; i++) {
		table += "<tr>";
		for (var j = 0; j < 8; j++) {
			if (color) {
				table += "<td id=\"i" + i + "j" + j + "\" bgcolor=\"silver\" onclick=\"select(" + i + "," + j + ");\"></td>";
			} else {
				table += "<td id=\"i" + i + "j" + j + "\" bgcolor=\"white\" onclick=\"select(" + i + "," + j + ");\"></td>";
			}

			color = !color;
		}
		table += "</tr>";
		color = !color;
	}
	table += "</table>";
	document.write(table);
}

init();
