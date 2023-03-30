function resposta(){
    var peso = document.getElementById("peso1").value;
    peso = Number(peso)
    var altura = document.getElementById("altura1").value;
    altura = Number(altura)

    var imc = (peso/(altura**2));

    document.getElementById("caixinha").style = `
                                                position: absolute;
                                                width: 600px;
                                                height: 50px;
                                                margin-top: 425px;
                                                border-radius: 2%;
                                                `
    document.getElementById("textinho").style = `font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;`

    if (peso == 0 || altura == 0){
        document.getElementById("textinho").innerHTML = `Digite números diferentes de 0`
    }

    else if (imc<18.5){
        document.getElementById("textinho").innerHTML = `Seu imc é: ${imc} Você está abaixo do peso`;
    }

    else if (imc>=18.5 & imc<25){
        document.getElementById("textinho").innerHTML = `Seu imc é: ${imc} Você está no peso ideal`;
    }

    else if (imc>=25 & imc<30){
        document.getElementById("textinho").innerHTML = `Seu imc é: ${imc} Você está acima do peso`;
    }

    else if (imc>=30 & imc<35){
        document.getElementById("textinho").innerHTML = `Seu imc é: ${imc} Você está com obesidade grau I`;
    }

    else if (imc>=35 & imc<40){
        document.getElementById("textinho").innerHTML = `Seu imc é: ${imc} Você está com obesidade grau II`;
    }

    else{
        document.getElementById("textinho").innerHTML = `Seu imc é: ${imc} Você está com obesidade grau III`;
    }
}