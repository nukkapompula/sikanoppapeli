document.getElementById("pelaajatOk").addEventListener("click", testi);

function testi(event){
    event.preventDefault();
    if(document.getElementById("pelaajienLkm").value < 2){
        console.log("LISÄÄ PELAAJIA!!!");
        document.getElementById("pelaajienLkm").value = "";
    } else {
        console.log("kaikki ookoo");
        document.getElementById("alkuPelaajat").style.display = "none";
    }
}