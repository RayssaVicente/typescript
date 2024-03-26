// Primeira função do exercício

type PlanetSituation = 'Habitado' | 'Habitavel' | 'Inabitavel' | 'Inexplorado'

type PlanetCoordinates = [number, number, number, number]

type Planet = {
    name: string
    coordinates: PlanetCoordinates
    situation: PlanetSituation
    satellites: string[]
}

const planets: Planet[] = []

function addPlanet(name:string, coordinates: PlanetCoordinates, situation: PlanetSituation){
   
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    })
    alert(`O planeta ${name} foi salvo com sucesso.`)
   
}

function findPlanet (name: string){
    const planet = planets.find(planet => planet.name === name )

    return planet ?? false
}

function updateSituation(situation: PlanetSituation, planet: Planet){
    planet.situation = situation

    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}.`)
}

function addSatellite(name: string, planet: Planet){
    planet.satellites.push(name)

    alert(`O satelite ${name} foi adcionado ao planeta ${planet.name}.`)
}


function removeSatellite(name: string, planet: Planet){
    planet.satellites = planet.satellites.filter(satellite => satellite !== name)

    alert(`O satelite ${name} foi removido do planeeta ${planet.name}.`)
}

