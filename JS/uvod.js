// klik na dugme za modal 1
var uputeIgra = document.getElementById("upute-igra").addEventListener("click", () => {
    document.getElementById("modal1").style.display = "block";
})
// klik na dugme za modal 2
var oPredmetu = document.getElementById("o-predmetu").addEventListener("click", () => {
    document.getElementById("modal2").style.display = "block";
})

// klik na x da se skloni modal
function ukloniModal1() {
    document.getElementById("modal1").style.display = "none"
}
// klik na x da se skloni modal
function ukloniModal2() {
    document.getElementById("modal2").style.display = "none"
}
// Na kraju izbornik da se vrati na pocetak ako igrac ne zeli ponovo da igra


// klik na prozor da se skloni modal
window.addEventListener("click", (e) => {
    if (e.target.id == "modal1") {
        document.getElementById("modal1").style.display = "none"
    }
    if (e.target.id == "modal2") {
        document.getElementById("modal2").style.display = "none"
    }
})