document.getElementById("pelaajatOk").addEventListener("click", pelaajaMaara);
document.getElementById("asetuksetOk").addEventListener("click", tarkistaAsetukset);
var osallistujat = 0;
var valmistelutOk = false;
var maxPisteet = 0;
var heppu = null;
var pelaajat = [];

function pelaajaMaara(event){
    // käyttäjän syöttäessä pelaajien lukumäärän asetukset ilmestyvät näkyviin
    event.preventDefault();
    if(document.getElementById("pelaajienLkm").value < 2){
        document.getElementById("pelaajienLkm").value = "";
    } else {
        osallistujat = document.getElementById("pelaajienLkm").value;
        document.getElementById("alkuPelaajat").style.display = "none";
        document.getElementById("asetukset").style.display = "block";
        nimeaPelaajat();
    }
}

function nimeaPelaajat(){
    // luodaan pelaajia vastaava määrä täytettäviä nimikenttiä
    for(let indeksi=0; indeksi<osallistujat; indeksi++){
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
    // pistemäärän kelpoisuus
    if(document.getElementById("voittoPisteet").value < 1){
        valmistelutOk = false;
        document.getElementById("voittoPisteet").value = "";
    } else {
        valmistelutOk = true;
    }

    // pelaajanimien tarkistus (ei tyhjiä merkkijonoja)
    for(let indeksi=0; indeksi<document.getElementsByClassName("pNimi").length; indeksi++){
        if(document.getElementsByClassName("pNimi")[indeksi].value == ""){
            valmistelutOk = false;
            return
        } else {
            valmistelutOk = true;
        }
    }

    // luodaan kullekin pelaajalle olio ja tallennetaan maksimipisteet peliä varten
    if(valmistelutOk == true){
        console.log("kaikki ok");
        for(let indeksi=0; indeksi<document.getElementsByClassName("pNimi").length; indeksi++){
            pelaajat.push(heppu = {
                nimi: `${document.getElementsByClassName("pNimi")[indeksi].value}`,
                pistesaldo: 0,
                kierrospisteet: 0
            })
        }
        maxPisteet = document.getElementById("voittoPisteet").value;

        // laitetaan peliohjeet näkyviin pelaajan valitseman noppamäärän mukaan
        if(document.getElementById("noppaValikko").value == "1noppa"){
            document.getElementById("peliohjeet").style.display = "block";
        } else {
            document.getElementById("peliohjeet").style.display = "block";
            document.getElementById("lisaohjeet").style.display = "block";
        }
        document.getElementById("asetukset").style.display = "none";
        peli1Nopalla();
    }
}

function peli1Nopalla(){
    document.getElementById("yhdenNopanPeli").style.display = "grid";
}