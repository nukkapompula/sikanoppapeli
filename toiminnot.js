document.getElementById("pelaajatOk").addEventListener("click", pelaajaMaara);
var pelaajat = 0;

function pelaajaMaara(event){
    // pelaaja syöttää pelaajien lukumäärän
    event.preventDefault();
    if(document.getElementById("pelaajienLkm").value < 2){
        document.getElementById("pelaajienLkm").value = "";
    } else {
        pelaajat = document.getElementById("pelaajienLkm").value;
        document.getElementById("alkuPelaajat").style.display = "none";
        document.getElementById("asetukset").style.display = "block";
        nimeaPelaajat();
    }
}

function nimeaPelaajat(){
    // luodaan pelaajia vastaava määrä täytettäviä nimikenttiä
    for(let indeksi=0; indeksi<pelaajat; indeksi++){
        let uusiElementti = document.createElement("p");
        let uusiElementtiNimi = document.createTextNode(`Pelaajan ${indeksi+1} nimi: `);
        let uusiSyote = document.createElement("input");
        uusiSyote.className = "pNimi";
        uusiElementti.appendChild(uusiElementtiNimi);
        uusiElementti.appendChild(uusiSyote);
        document.getElementById("alkuNimet").appendChild(uusiElementti);
    }
}