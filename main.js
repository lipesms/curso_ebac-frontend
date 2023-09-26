function Animal(nome){

    let _nome = nome;

    this.comer = function(){
        console.log(`${this.getNome()} está comendo`)
    }
    this.bebe = function(){
        console.log(`${this.getNome()} está bebendo`)
    }
    this.respirar = function(){
        console.log(`${this.getNome()} está respirando`)
    }

    this.getNome = function(){
        return _nome
    }
}

function Cachorro(nome, raca, tamanho, idade){
    this.raca = raca;
    this.tamanha = tamanho;
    this.idade = idade;

    Animal.call(this, nome)

    this.latir = function(){
        console.log("au au")
    }
}

function Passaro(nome, raca, tamanho){
    this.raca = raca;
    this.tamanha = tamanho;

    Animal.call(this, nome)

    this.voar = function(){
        console.log(`${nome} voou para longe`)
    }
}



function Galinha(nome,tamanho){
    Passaro.call(this, nome, "galinha", tamanho)

    this.voar = function(){
        console.log(`${this.getNome()} voou um pouquinho`)
    }
}

const doguinho = new Cachorro("diana", 4, 'poodle', 65, 4)

console.log("cachorro")
console.log(doguinho.getNome())
doguinho.comer()
console.log("")

const passarinho = new Passaro("fefe", "calopsita", 35)

console.log("passáro")
console.log(passarinho.getNome())
passarinho.comer()
passarinho.voar()
console.log("")

const galinassio = new Galinha("pintadinha", 50)

console.log("galinha")
galinassio.voar()