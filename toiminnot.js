document.getElementById("pelaajatOk").addEventListener("click", pelaajaMaara);
document.getElementById("asetuksetOk").addEventListener("click", tarkistaAsetukset);
var pelaajat = 0;
var valmistelutOk = false;
var maxPisteet = 0;

function pelaajaMaara(event){
    // käyttäjän syöttäessä pelaajien lukumäärän asetukset ilmestyvät näkyviin
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

function tarkistaAsetukset(event){
    event.preventDefault();
    if(document.getElementById("voittoPisteet").value < 6){
        console.log("ei passaa, patu");
        valmistelutOk = false;
        document.getElementById("voittoPisteet").value = "";
    } else {
        valmistelutOk = true;
    }
}