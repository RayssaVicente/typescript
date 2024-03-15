// Dica para simplificar você pode criar um array no escopo global para ser utilizado pelas funções

// Desafio tente utilizar a página HTML criada na aula prática e as funções de entrada/ saida do navegador com prompt confirm e alert para criar um nemu interativo

// A primeria função devera salvar um objeto spaceship com, no minino, as seguintes propriedades: name, que devera se inserido pelo usuario, pilot que devera ser inserido pelo usuario, crewLimit o tamanho máximo da tripulação que devera ser inserido pelo usuario, cruew um array de strings inicialmente vazio, inMission que inicialmente deve ser falso

// A segunda função ela devera adicionar um membro á tripulação de uma determinada nave. No entanto o tamanha máximo de tripulantes não pode ser excedido.

// A terceira função devera enviar uma determinada nave em uma missão caso ela já não esteja. Para isso é preciso que 1/3 da sua tripulação esteja preenchida, arredondando para Baixo.

// A quarta função devera lista todas as naves registradas e as suas pespectivas missões

const spaceships = []

function addSpaceship (name:string,pilot:string, crewLimit: number,){
    const spaceship = {
        name,
        pilot,
        crewLimit,
        cruew: [],
        inMission: false
    }
    spaceships.push(spaceship)

   alert(`A nave ${spaceship.name} foi registrada`)
}

function findSpaceship(name:string){
    let spaceship = {
        name:String,
        pilot:String,
        crewLimit:Number,
        crew:String[],
        inMission: Boolean
    }
    spaceship = spaceships.find((ship) =>{
        return ship.name === name
    })

    return spaceship
}