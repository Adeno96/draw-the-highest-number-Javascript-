//carte
let cartaUno = document.getElementById("cartaUno");
let cartaDue = document.getElementById("cartaDue");
//button
let button = document.getElementById("gioca");
//mess fine gioco
let messFinePartita = document.getElementById("messFinePartita");


button.onclick = function() {
    cartaUno.innerHTML=Math.floor(Math.random() *10);
    cartaDue.innerHTML=Math.floor(Math.random()*10);

    if (cartaUno.innerHTML > cartaDue.innerHTML) {
        messFinePartita.innerHTML="Hai Vinto!";
        messFinePartita.style.display="block";
    } else if (cartaUno.innerHTML < cartaDue.innerHTML) {
        messFinePartita.innerHTML="Hai Perso!";
        messFinePartita.style.display="block";
    } else {
        messFinePartita.innerHTML="Partita Patta!";
        messFinePartita.style.display="block";
    }

}

