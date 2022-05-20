function calcular(val1,val2) {

    var val1 = document.getElementById('val1')
    var val2 = document.getElementById('val2')

    var res = document.querySelector('div#res')

    var operacao = document.getElementById('selector').value

    if (val1.value.length == 0 || val2.value.length == 0) {

        window.alert("[ERRO] Por favor! insira os valores")

    } else {

        var val01 = Number(val1.value)
        var val02 = Number(val2.value)

        res.innerHTML = ''
        res.innerHTML = 'Resultado:'

        switch(operacao) {

            case '+':

                let a = val01 + val02
                res.innerHTML +=` ${val01} + ${val02} = ${a}`
                break

            case '-':

                let b = val01 - val02
                res.innerHTML += ` ${val01} - ${val02} = ${b}`
                break

            case '*':

                let c = val01 * val02
                res.innerHTML += ` ${val01} x ${val02} = ${c}`
                break

            case '/':

                let d = val01 / val02
                res.innerHTML += ` ${val01} ÷ ${val02} = ${d}`
                break
        }
    }
}