let heroi = ["Anderson Souza", 6000]

if (heroi[1] < 10001){
    if (heroi[1] < 1000){
        console.log("O Herói de nome " + heroi[0] + " está no nível de Ferro")
    } else if (heroi[1] > 1001 && heroi[1] < 2000){
        console.log("O Herói de nome " + heroi[0] + " está no nível de Bronze")
    } else if (heroi[1] > 2001 && heroi[1] < 5000){
        console.log("O Herói de nome " + heroi[0] + " está no nível de Prata")
    } else if (heroi[1] > 5001 && heroi[1] < 7000){
        console.log("O Herói de nome " + heroi[0] + " está no nível de Ouro")
    } else if (heroi[1] > 7001 && heroi[1] < 8000){
        console.log("O Herói de nome " + heroi[0] + " está no nível de Prata")
    } else if (heroi[1] > 8001 && heroi[1] < 9000){
        console.log("O Herói de nome " + heroi[0] + " está no nível de Prata")
    } else if (heroi[1] > 9001 && heroi[1] < 10000){
        console.log("O Herói de nome " + heroi[0] + " está no nível de Prata")
    } else if (heroi[1] > 2001 && heroi[1] < 5000){
        console.log("O Herói de nome " + heroi[0] + " está no nível de Prata")
    }
} else {
    console.log("Valor inválido")
}