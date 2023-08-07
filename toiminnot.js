document.getElementById("pelaajatOk").addEventListener("click", testi);

function testi(event){
    event.preventDefault();
    if(document.getElementById("pelaajienLkm").value < 2){
        console.log("LISÄÄ PELAAJIA!!!");
    } else {
        console.log("kaikki ookoo");
    }
}