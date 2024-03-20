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
    let spaceship: {
        name:string,
        pilot:string,
        crewLimit:number,
        crew:string[],
        inMission: boolean
    }
    spaceship = spaceships.find((ship) =>{
        return ship.name === name
    })

    return spaceship
}

function addCrewMember(member: string, spaceship: {name: string, crewLimit: number, crew: string[]}){
 if (spaceship.crew.length >= spaceship.crewLimit){
    alert(`${member} não pode ser adicionado. Limite atingindo.`)
 }else{
    spaceship.crew.push(member)

    alert(`${member} foi adicionado á tripulação da ${spaceship.name}`)
 }
}

function sedInMission(spaceship: {name: string, crewLimit: number, crew: string[], inMission: boolean}){
    if (spaceship.inMission){
        alert(`${spaceship.name} não pode ser enviada. Nave já em missão.`)
    }else if (spaceship.crew.length < Math.floor(spaceship.crewLimit /3)){
        alert(`${spaceship.name} não pode ser enviada Tripulação insuficiente.`)
    }else{
        spaceship.inMission = true

        alert(`${spaceship.name} enviada para a missão!`)
    }
}

function firstMenuOption(){
    const name = prompt('Qual é o nome da nave a ser registrada? ')
    const pilot = prompt(`Qual é o nome do piloto da ${name}? `)
    const crewLimit = Number(prompt(`Quantos tripulantes a ${name} suporta? `))

    const confirmation = confirm(`Confirma o registro da nave ${name}\nPiloto: ${pilot}\nLimite da tripulação: ${crewLimit}`)

    if(confirmation){
        addSpaceship(name, pilot, crewLimit)
    }
}

function secondMenuOption(){
    const member = prompt('Qual é o nome do tripulante?' )
    const spaceshipName = prompt(`Para qual nave ${member} devera ser designado? `)

    const spaceship = findSpaceship(spaceshipName)

    if (spaceship){
        const confirmation = confirm(`Confima a inclusão de ${member} na tripulação da ${spaceship.name}? `)

        if(confirmation){
            addCrewMember(member, spaceship)
        }
    }
}

function thirdMenuOption(){
    const spaceshipName = prompt('Qual é o nome da nave a ser enviada? ')

    const spaceship = findSpaceship(spaceshipName)

    if(spaceship){
        const confirmation = confirm(`Confirma e envio da ${spaceship.name} na missão?`)

        if(confirmation){
            sedInMission(spaceship)
        }
    }
}

function fourthMenuOption(){
    let list = 'Naves Registradas:\n'

    spaceships.forEach((spaceship: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean
      }) => {
        list += `
        Nave: ${spaceship.name}
        Piloto: ${spaceship.pilot}
        Em missão? ${spaceship.inMission ? 'Sim' : 'Não'}
        Tamanho Máximo da Triuplação: ${spaceship.crewLimit}
        Tripulantes: ${spaceship.crew.length}
      `
  
      spaceship.crew.forEach(member => {
        list += `    - ${member}\n`
      })
  
    })
  
    alert(list)
}

let userOption = 0

while(userOption !== 5){
    const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em Missão
    4 - Listar naves registradas
    5 - Encerrar
    `

    userOption = Number.parseInt(prompt(menu))

    switch(userOption){
        case 1:
            firstMenuOption()
            break
        case 2:
            secondMenuOption()
            break
        case 3:
            thirdMenuOption()
            break
        case 4:
            fourthMenuOption()
            break
        case 5:
            alert("Encerrando o sistema...")
            break
        default:
            alert('Opção inválida! Retornando ao painel principal...')
            break
    }
    
}