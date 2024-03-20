let literal: 'Hello, world!'
let pi: 3.14159
 
literal = 'Hii, world'

let option: 'Yes' | "No" | "Maybe"

option = "Maybe"

// let planet : "Mercurio" | "Vênus" | "Terra" | "Marte"

type Planet = "Mercurio" | "Vênus" | "Terra" | "Marte"

let planet: Planet

// if(planet === 'Terra'){
//     console.log('Estamos na Terra')
// }

let homePlanet: Planet

function checkPlanet(planet: Planet){
    if(planet === 'Terra'){
        console.log('Estamos na Terra')
    }
}

type GreetingCallback = (name: string) => void

function greet(callbackfn: GreetingCallback){
    let name = false

    callbackfn(name)
}