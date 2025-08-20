// Este algoritmo define a classe do herói de acordo com seu xp

/* Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante */

//lista dos pokémons e seus respectivos xp

let bulbasaur = 850; // Ferro
let charmander = 1500; // Bronze
let squirtle = 2300; // Prata
let eevee = 5800; // Ouro
let snorlax = 7500; // Platina
let mewtwo = 8700; // Ascendente
let dragonite = 9500; // Imortal
let pikachu = 10500; // Radiante 



//Solicita ao usuario o nome do pokémon desejado

let pokemon = console.log("Digite o nome do pokemon (bulbasaur, charmander, squirtle, eevee, snorlax, mewtwo, dragonite, pikachu):");

pokemon = "pikachu"; //para teste, substitua pelo nome do pokemon desejado

//verifica o nome do pokémon e exibe a classe do herói e o xp

while (resposta === "sim") {

if (pokemon === "bulbasaur") {   
        console.log("O herói escolhido é Bulbasaur, com XP de " + bulbasaur + ". Classe: Ferro, XP menor que 1.000.");       
    }else if (pokemon === "charmander") {
        console.log("O herói escolhido é Charmander, com XP de " + charmander + ". Classe: Bronze, XP entre 1.001 e 2.000.");
    }else if (pokemon === "squirtle") {
        console.log("O herói escolhido é Squirtle, com XP de " + squirtle + ". Classe: Prata, XP entre 2.001 e 5.000.");
    }else if (pokemon === "eevee") {  
        console.log("O herói escolhido é Eevee, com XP de " + eevee + ". Classe: Ouro, XP entre 5.001 e 7.000.");   
    }else if (pokemon === "snorlax") {
        console.log("O herói escolhido é Snorlax, com XP de " + snorlax + ". Classe: Platina, XP entre 7.001 e 8.000.");   
    }else if (pokemon === "mewtwo") {
        console.log("O herói escolhido é Mewtwo, com XP de " + mewtwo + ". Classe: Ascendente, XP entre 8.001 e 9.000.");
    }else if (pokemon === "dragonite") {        
        console.log("O herói escolhido é Dragonite, com XP de " + dragonite + ". Classe: Imortal, XP entre 9.001 e 10.000.");
    }else if (pokemon === "pikachu") {
        console.log("O herói escolhido é Pikachu, com XP de " + pikachu + ". Classe: Radiante, XP maior ou igual a 10.001.");
    }else {      
        console.log("Pokémon não encontrado. Por favor, verifique o nome digitado.");
    }
}
    
    

    console.log("Deseja verificar outro pokemon? (sim/não)");

    let resposta = "sim"; 

    if (resposta === "sim") {
        continuar = true;
    } else {
        continuar = false;
        console.log("Obrigado por usar o sistema de classes de heróis!");
    }
