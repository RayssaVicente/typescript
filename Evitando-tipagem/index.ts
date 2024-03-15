function sendSpaceship(spaceship: {pilot: string, copilot?: string}){

}

sendSpaceship({pilot: 'Man solo', copilot: 'chebacca'})

sendSpaceship({pilot:'luke'})
// desse jeito sem declara os dois atributos daria erro, mas isso pode ser resolvido com um ?

let input: unknown

input = 'Text'
input = 20
input = []
// Pode receber informações de varios tipos pois o unknown não tem um tipo definido

let text: string

text = input
// Text não tem como receber uma variavel que não tem um tipo expecifico
input = text
// Input pode receber text por que input não tem tipo expecifico

let input2: any

input2 = 'Text'
input2 = 20
input2 = []

text = input2
// O any não e para ser muito usado por que ele não notifica nenhum erro


// O never entra como un nunca, significa que nunca um valor podera ser atribuido a variavel que tiver never
function verification(test){
    if(test){

    }else {
        let _check: never

        let text = _check

        text = ''

        return _check
    }
}
