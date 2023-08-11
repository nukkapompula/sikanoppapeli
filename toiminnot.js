// nopan kaikki silmäluvut yhdistetään kuviin
var sivu0 = new Image();
sivu0.src = "nro1.gif";
var sivu1 = new Image();
sivu1.src = "nro2.gif";
var sivu2 = new Image();
sivu2.src = "nro3.gif";
var sivu3 = new Image();
sivu3.src = "nro4.gif";
var sivu4 = new Image();
sivu4.src = "nro5.gif";
var sivu5 = new Image();
sivu5.src = "nro6.gif";

document.getElementById("pelaajatOk").addEventListener("click", pelaajaMaara);
document.getElementById("asetuksetOk").addEventListener("click", tarkistaAsetukset);
let kenenVuoro = document.getElementById("kenenVuoro");
let heittoPst = document.getElementById("heittoPst");
let pisteraja = document.getElementById("pisteraja");
var osallistujat = 0;
var valmistelutOk = false;
var maxPisteet = 0;
var vuoroPisteet = 0;
var heppu = null;
var pelaajat = [];
var pisteetSaavutettu = false;
var vuoroNro = 0;

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
        return
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
        for(let indeksi=0; indeksi<document.getElementsByClassName("pNimi").length; indeksi++){
            pelaajat.push(heppu = {
                nimi: `${document.getElementsByClassName("pNimi")[indeksi].value}`,
                pistesaldo: 0
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
    // valmistelut
    document.getElementById("yhdenNopanPeli").style.display = "grid";
    for(indeksi=0; indeksi<pelaajat.length; indeksi++){
        let nimi = document.createElement("p");
        let nimiTeksti = document.createTextNode(pelaajat[indeksi].nimi + ", pisteet:");
        let saldo = document.createElement("p");
        let saldoArvo = document.createTextNode(0);
        saldo.className = "kokoPisteet";
        nimi.appendChild(nimiTeksti);
        saldo.appendChild(saldoArvo);
        document.getElementById("pelaajaLoota").appendChild(nimi);
        document.getElementById("pelaajaLoota").appendChild(saldo);
    }
    kenenVuoro.innerHTML = `Sinun vuorosi, ${pelaajat[vuoroNro].nimi}!`;
    heittoPst.innerHTML = "";
    pisteraja.innerHTML = `Voittoon tarvitaan ${maxPisteet} pistettä tai enemmän.`;
}

function heitaNoppaa(event){
    console.log("heitit noppaa");
    // pseudosatunnaisluku väliltä 0-5
    var noppaluku = Math.round(Math.random()*5);
    document.images["noppakuvake"].src = eval("sivu" + noppaluku + ".src");
    if(noppaluku == 0){
        console.log("tuli ykkönen!")
        document.getElementById("lopeta").style.display = "none";
        vuoroPisteet = 0;
        heittoPst.innerHTML = `Turkanen, ${pelaajat[vuoroNro].nimi} menetti vuoronsa pisteet!`;
        vuoroNro += 1;
        if(vuoroNro == pelaajat.length){
            vuoroNro = 0;
        }
        kenenVuoro.innerHTML = `Sinun vuorosi, ${pelaajat[vuoroNro].nimi}!`
    } else {
        vuoroPisteet += noppaluku+1;
        console.log(`vuoron pisteet ovat ${vuoroPisteet}`);
        kenenVuoro.innerHTML = `Sinun vuorosi, ${pelaajat[vuoroNro].nimi}!`;
        heittoPst.innerHTML = `Voit lisätä saldoosi ${vuoroPisteet} pistettä lopettamalla heittämisen.`;
        document.getElementById("lopeta").style.display = "block";
    }
}

function lopeta(event){
    console.log("lopetit vuorosi");
    document.getElementById("lopeta").style.display = "none";
    pelaajat[vuoroNro].pistesaldo += vuoroPisteet;
    // tarkistetaan riittävätkö pisteet voittoon
    if(pelaajat[vuoroNro].pistesaldo >= maxPisteet){
        document.getElementById("voittoIkkuna").style.display = "block";
        document.getElementById("peliohjeet").style.display = "none";
        document.getElementById("yhdenNopanPeli").style.display = "none";
        document.getElementById("voittoTeksti").innerHTML = `${pelaajat[vuoroNro].nimi} on voittaja! Hurraa!`
    }
    document.getElementsByClassName("kokoPisteet")[vuoroNro].innerHTML = pelaajat[vuoroNro].pistesaldo;
    vuoroPisteet = 0;
    vuoroNro += 1;
    if(vuoroNro == pelaajat.length){
        vuoroNro = 0;
    }
    kenenVuoro.innerHTML = `Sinun vuorosi, ${pelaajat[vuoroNro].nimi}!`;
    heittoPst.innerHTML = "";
}