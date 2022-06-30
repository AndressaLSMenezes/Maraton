let maratona = ['Rafael', 'Manoel', 'Daniel']

function positions(a) {
    let aux = a.indexOf('Daniel')

        if (aux == 0){
            return  "Daniel é o vencedor"
        } else if(aux !== 0) {
            a[aux] = a[aux - 1]
            a[aux -1] = "Daniel"
        }

    return a
}


console.log(positions(maratona))
