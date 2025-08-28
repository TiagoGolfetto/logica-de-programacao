//Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    /*  um método chamado atacar que deve atender os seguientes requisitos:
     - exibir a mensagem: "o {tipo} atacou usando {ataque}")
     - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
     - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo: */

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando heróis, agora com a padronização no construtor
let heroi1 = new Heroi('Aragorn', 87, 'Guerreiro');
let heroi2 = new Heroi('Gandalf', 2019, 'monge ');
let heroi3 = new Heroi('Gimli', 139, 'Guerreiro');
let heroi4 = new Heroi('Frodo', 50, 'ninja');
let heroi5 = new Heroi('Legolas', 38, 'elfo');

// Fazendo-os atacar
heroi1.atacar(); // O guerreiro atacou usando espada
heroi2.atacar(); // O monge atacou usando artes marciais
heroi3.atacar(); // O guerreiro atacou usando espada
heroi4.atacar(); // O ninja atacou usando shuriken
heroi5.atacar(); // O elfo atacou usando um ataque desconhecido    

