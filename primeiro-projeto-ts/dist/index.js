function sendSpaceShip(name, captain) {
    var SpaceShip = {
        name: name,
        captain: captain,
        speead: 20,
        InMission: true,
        cruew: []
    };
    alert("A nave ".concat(SpaceShip.name, " comandada pelocapit\u00E3o ").concat(SpaceShip.captain, " foi enviada em uma miss\u00E3o."));
    return SpaceShip;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade de ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade de ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceship.name, "..."));
    }
}
var spaceshipName = prompt('Insira o nome da nave a ser enviada: ');
var spaceshipCaptain = prompt('Insira o nome do capitão da nave: ');
sendSpaceShip(spaceshipName, spaceshipCaptain);
