function somar (n1,n2){
    return n1 + n2
    //OBS: Pode-se declarar as variaveis n1 e n2 aqui, e utilizar o document.getElementById com o = resultado
};
    document.getElementById('somar').onclick = function(){
        let n1 = Number(document.getElementById ('n1').value.trim())
        let n2 = Number(document.getElementById ('n2').value.trim())

        document.getElementById ('Resultado').innerHTML =somar(n1,n2)
    }
    function subtrair (n1,n2){
        return n1 - n2
    }
    document.getElementById('subtrair').onclick = function(){
        let n1 = Number(document.getElementById ('n1').value.trim())
        let n2 = Number(document.getElementById ('n2').value.trim())

        document.getElementById ('Resultado').innerHTML =subtrair(n1,n2)
    }
    function multiplicar (n1,n2){
        return n1 * n2
    }
    document.getElementById('multiplicar').onclick = function(){
        let n1 = Number(document.getElementById ('n1').value.trim())
        let n2 = Number(document.getElementById ('n2').value.trim())

        document.getElementById ('Resultado').innerHTML =multiplicar(n1,n2)
    }
    function dividir (n1,n2){
        return n1 / n2
    }
    document.getElementById('dividir').onclick = function(){
        let n1 = Number(document.getElementById ('n1').value.trim())
        let n2 = Number(document.getElementById ('n2').value.trim())

        document.getElementById ('Resultado').innerHTML =dividir(n1,n2)

    }
