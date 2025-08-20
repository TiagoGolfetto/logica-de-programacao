// Calculado o ranking de um jogador através dos resultados de suas partidas


//informando o número de vitórias e derrotas
let vitorias = parseInt(prompt("Digite o número de vitórias:"));
let derrotas = parseInt(prompt("Digite o número de derrotas:"));

// crianco a função que vai retornar o saldoVitorias
function saldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}   

saldo = saldoVitorias(vitorias, derrotas);

//definindo o ranking do jogador
function rankingJogador(saldo) {
    if (saldo < 10) {
        return "ferro";
    } else if (saldo >10 && saldo <= 20) {
        return "bronze";
    } else if (saldo > 20 && saldo <= 50) { 
        return "prata"; 
    }else if (saldo > 50 && saldo <= 80) {
        return "ouro";
    } else if (saldo > 80 && saldo <= 90) {
        return "Diamante";

    }else if (saldo > 90 && saldo <= 100) {
        return "lendário";
    }else{
        return "Imortal"
    }

}

//chamando a função e exibindo o resultado

alert("O ranking do jogador é: " + rankingJogador(saldo) + " com saldo de vitórias: " + saldo );