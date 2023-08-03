function calcular(){
    let num = document.getElementById('num')
    let n = Number(num.value)
    let res = document.getElementById('res')
    let tabelaRes = document.getElementById('tabela-res')

    if (n <= 0){
        window.alert('[ERRO] Insira um numero maior do que 0')
        res.innerHTML = 'Não calculo essa tabuada'
    }else{
        res.innerHTML = `A tabuada de ${n} é: <br>`
        for(c=1;c<=10;c++){
            res.innerHTML += `${n} x ${c} = ${c*n} <br>`
        }
    }

    tabelaRes.style.display = 'block';
    
}