document.getElementById("pelaajatOk").addEventListener("click", pelaajaMaara);
var pelaajat = 0;

function pelaajaMaara(event){
    event.preventDefault();
    if(document.getElementById("pelaajienLkm").value < 2){
        console.log("LISÄÄ PELAAJIA!!!");
        document.getElementById("pelaajienLkm").value = "";
    } else {
        console.log("kaikki ookoo");
        pelaajat = document.getElementById("pelaajienLkm").value;
        document.getElementById("alkuPelaajat").style.display = "none";
        document.getElementById("alkuNimet").style.display = "block";
        nimeaPelaajat();
    }
}

function nimeaPelaajat(){
    for(let indeksi=0; indeksi<pelaajat; indeksi++){
        let uusiElementti = document.createElement("p");
        let uusiElementtiNimi = document.createTextNode(`Pelaajan ${indeksi+1} nimi: `);
        let uusiSyote = document.createElement("input");
        uusiSyote.className = "pNimi";
        uusiElementti.appendChild(uusiElementtiNimi);
        uusiElementti.appendChild(uusiSyote);
        document.getElementById("alkuNimet").appendChild(uusiElementti);
    }
    let uusiOhje = document.createElement("p");
    let uusiOhjeTeksti = document.createTextNode("Pelin voittamiseen vaadittava pistemäärä: ");
    let pisteSyote = document.createElement("input");
    pisteSyote.id = "voittoPisteet";
    pisteSyote.type = "number";
    uusiOhje.appendChild(uusiOhjeTeksti);
    uusiOhje.appendChild(pisteSyote);
    document.getElementById("alkuNimet").appendChild(uusiOhje);
}