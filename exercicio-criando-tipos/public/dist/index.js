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
