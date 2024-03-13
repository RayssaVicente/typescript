function sendSpaceShip(name:string, captain:string){
    const Spaceship = {
        name, 
        captain,
        speed: 20,
        InMission: true,
        cruew: []
    }

    alert(`A nave ${Spaceship.name} comandada pelo capitão ${Spaceship.captain} foi enviada em uma missão.`)

    return Spaceship
}

function accelerate(targetSpeed: number, spaceship:{name: string, speed: number} ){
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade de ${spaceship.name} para ${targetSpeed}...`)
    } else if (spaceship.speed < targetSpeed){
        alert(`Aumentando a velocidade de ${spaceship.name} para ${targetSpeed}...`)
    } else{
        alert(`Mantendo a velocidade da ${spaceship.name}...`)
    }

}

const spaceshipName = prompt('Insira o nome da nave a ser enviada: ')
const spaceshipCaptain = prompt('Insira o nome do capitão da nave: ')

const currentShip = sendSpaceShip(spaceshipName, spaceshipCaptain)

const  speed = Number(prompt('Insira a velocidade para a qual deseja acelera.'))

accelerate(currentShip, speed)