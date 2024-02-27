let button = document.getElementById("calcular");

button.addEventListener("click", calcular);

function calcular(){
    const input = document.getElementById("peso");
     const peso = parseInt(input.value);
     const FLU = document.getElementById("flu");
     const MAN = document.getElementById("man");
     const ERROR = document.getElementById("error");

     FLU.style.display = "none";
     ERROR.style.display = "none";
     MAN.style.display = "none";

     if (peso <= 30 && peso > 0) {
        const VOLUMEN_DIARIO = hollidaySegar(peso)
        const MANTENIMIENTO = Math.round (VOLUMEN_DIARIO / 24);
        const MM2 = Math.round (MANTENIMIENTO * 1.5);
        FLU.innerHTML = MANTENIMIENTO + "cc/hr";
        MAN.innerHTML = "m+m/2: " + MM2 + "cc/hr";
        FLU.style.display = "block";
        MAN.style.display = "block";
     }
     else if (peso <= 0) {
        ERROR.style.display ="block";
        input.value = "";
     } 
     else {
        const SC1500 = Math.round(superficieCorporal(peso) * 1500);
        const SC2000 = Math.round(superficieCorporal(peso) * 2000);
        FLU.innerHTML ="SC 1500:" + SC1500 + "cc";
        MAN.innerHTML ="SC 2000:" + SC2000 + "cc";
        FLU.style.display = "block";
        MAN.style.display = "block";
     }
    }

    function hollidaySegar(peso){
        let volumenDiario;
        if (peso <= 10){
            volumenDiario = peso * 100;
        }
        else if (peso <= 20){ 
            volumenDiario = 1000 + ((peso - 10) * 50);
        }
        else if (peso <= 30){
            volumenDiario = 1500 + ((peso - 20) * 20);
        }
        return volumenDiario;
    }
    function superficieCorporal(peso){
        let superficieCorporal = ( (peso * 4) + 7) / (peso + 90);
        return superficieCorporal;
    }
