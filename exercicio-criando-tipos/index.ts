// Primeira função do exercício

const planet2 = []

function addPlanet2(nome:string, coordenadas: [number, number, number, number], situação: string, satelites: string){
    const planet = {
        nome,
        coordenadas,
        situação,
        satelites
    }
    
   planet2.push(planet)
   alert(`O planeta ${planet.nome} foi adicionado`)
}



