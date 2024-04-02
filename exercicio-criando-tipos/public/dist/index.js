// Primeira função do exercício
const planets = [];
function addPlanet(name, coordinates, situation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    });
    alert(`O planeta ${name} foi salvo com sucesso.`);
}
function findPlanet(name) {
    const planet = planets.find(planet => planet.name === name);
    return planet !== null && planet !== void 0 ? planet : false;
}
function updateSituation(situation, planet) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}.`);
}
function addSatellite(name, planet) {
    planet.satellites.push(name);
    alert(`O satelite ${name} foi adcionado ao planeta ${planet.name}.`);
}
function removeSatellite(name, planet) {
    planet.satellites = planet.satellites.filter(satellite => satellite !== name);
    alert(`O satelite ${name} foi removido do planeeta ${planet.name}.`);
}
function promptValidSituation() {
    let situation;
    let validSituation = false;
    while (!validSituation) {
        const situationInput = prompt("Informe a situação do planeta:\n1 - Habitado\n2 - Habitado\n3 - Inabitado\n4- Inexplorado");
        switch (situationInput) {
            case "1":
                situation = "Habitado";
                validSituation = true;
                break;
            case "2":
                situation = "Habitavel";
                validSituation = true;
                break;
            case "3":
                situation = "Inabitavel";
                validSituation = true;
                break;
            case "4":
                situation = "Inexplorado";
                validSituation = true;
                break;
            default:
                alert("Situação inválida!");
                break;
        }
    }
    return situation;
}
function promptValidPlanet(callback) {
    const planetName = prompt('Informe o nome do planeta: ');
    const planet = findPlanet(planetName);
    if (planet) {
        callback(planet);
    }
    else {
        alert('Planeta não encontrado! Retornando ao menu...');
    }
}
function firstMenuOption() {
    const name = prompt('Informe o nome do planeta: ');
    const coordinateA = Number(prompt('Informe a primeira coordenada: '));
    const coordinateB = Number(prompt('Informe a segunda coordenada: '));
    const coordinateC = Number(prompt('Informe a terceira coordenada: '));
    const coordinateD = Number(prompt('Informe a quarta coordenada: '));
    const situation = promptValidSituation();
    const confirmation = confirm(`Confirma o registro do planeta ${name}? Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD}),
    Situação: ${situation}`);
    if (confirmation) {
        addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation);
    }
}
function secondMenuOption() {
    promptValidPlanet(planet => {
        const situation = promptValidSituation();
        updateSituation(situation, planet);
    });
}
function thirdMenuOption() {
    promptValidPlanet(planet => {
        const satellite = prompt('Informe o nome do satelite a ser adcionado! ');
    });
}
function fourtMenuOption() {
    promptValidPlanet(planet => {
        const satellite = prompt('Informe o nome do satelite a ser removido! ');
    });
}
function fiftMenuOption() {
    let list = 'Planetas:\n';
    planets.forEach(planet => {
        const [a, b, c, d] = planet.coordinates;
        list += `
        Nome: ${planet.name}
        Coordenadas: (${a}, ${b}, ${c}, ${d})
        Situação: ${planet.situation}
        Satelites: ${planet.satellites.length}
        `;
        planet.satellites.forEach(satellite => {
            list += `   - ${satellite}\n`;
        });
    });
    alert(list);
}
