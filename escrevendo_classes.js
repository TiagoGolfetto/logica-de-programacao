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


let heroi1 = new Heroi('Aragorn', 87, 'Guerreiro');
let heroi2 = new Heroi('Gandalf', 2019, 'monge ');
let heroi3 = new Heroi('Gimli', 139, 'Guerreiro');
let heroi4 = new Heroi('Frodo', 50, 'ninja');
heroi1.atacar(); // O Guerreiro atacou usando Espada
heroi2.atacar(); // O Mago atacou usando Magia   
heroi3.atacar(); // O Arqueiro atacou usando Arco e Flecha
heroi4.atacar(); // O Hobbit atacou usando Ataque Desconhecido      