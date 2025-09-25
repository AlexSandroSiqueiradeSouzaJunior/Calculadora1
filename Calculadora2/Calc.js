function somar (n1,n2){
    return n1 + n2
    //OBS: Pode-se declarar as variaveis n1, n2 e resultados aqui, utilizando o document.getElementByid.
    //Depois, dentro do function, aplicar os códigos let numero1(2) = n1(2).value.trim()
    // let resultado = numero1 (+,-,/,*) numero2
    //resultados.innerHTML = ('Resultado', resultado)
};
    document.getElementById('somar').onclick = function(){
        let n1 = Number(document.getElementById ('n1').value.trim())
        let n2 = Number(document.getElementById ('n2').value.trim())

        document.getElementById ('Resultado').innerHTML =somar(n1,n2)
        n1.value=""
        n2.value=""
    }
    function subtrair (n1,n2){
        return n1 - n2
    }
    document.getElementById('subtrair').onclick = function(){
        let n1 = Number(document.getElementById ('n1').value.trim())
        let n2 = Number(document.getElementById ('n2').value.trim())

        document.getElementById ('Resultado').innerHTML =subtrair(n1,n2)
        n1.value=""
        n2.value=""

    }
    function multiplicar (n1,n2){
        return n1 * n2
    }
    document.getElementById('multiplicar').onclick = function(){
        let n1 = Number(document.getElementById ('n1').value.trim())
        let n2 = Number(document.getElementById ('n2').value.trim())

        document.getElementById ('Resultado').innerHTML =multiplicar(n1,n2)
        n1.value=""
        n2.value=""

    }
    function dividir (n1,n2){
        return n1 / n2
    }
    document.getElementById('dividir').onclick = function(){
        let n1 = Number(document.getElementById ('n1').value.trim())
        let n2 = Number(document.getElementById ('n2').value.trim())

        document.getElementById ('Resultado').innerHTML =dividir(n1,n2)
        n1.value=""
        n2.value=""


    }


