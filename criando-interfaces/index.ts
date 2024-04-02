// Uma Interface é outra maneira de
// declarar um tipo para um objeto,
// portanto funciona de forma semelhante

// Criação de uma interface
interface CelestialBody{
    name: string
    mass: number
}

// Interfaces podem ser herdadas ou herdar umas ás outras

interface Star extends CelestialBody{
    age: number
    planets: Planet3[]
}

interface Planet3 extends CelestialBody{
    population: number
    createSatellite: (name: string) => void
}

let sun: Star = {
    name: "Sol",
    mass: 1.989 * (10*30),
    age: 4.603 * (10 ** 9),
    planets: []
}

// Classes podem implementar inferfaces
// Nesse caso ela cria o que chamamos de contrato
// pois obriga a classe a implementar tudo o que foi definido na interface
class MilkyWayPlanet Implements Planet {
    
}