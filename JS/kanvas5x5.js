const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");



document.getElementById("potvrdi-igrace").addEventListener("click", () => {
    document.getElementById("nova-igra-igraci").style.display = "none";
    var igrac1 = document.getElementById("ime-igraca-1").value;
    var igrac2 = document.getElementById("ime-igraca-2").value;

    document.getElementById("igrac_1").innerHTML = igrac1;
    document.getElementById("igrac_2").innerHTML = igrac2;
    console.log("nesto")
})

var arr = [];

var ukupne = []
var brojac_ukupnih = 0

var crvene = [];
var plave = [];
var inc = 1;

var igrac_1_score = 0;
var igrac_2_score = 0;







canvas.width = "550";
canvas.height = "550";
canvas.style = "margin-top:4%"

canvas.addEventListener('click', crtajLiniju)



// Imao sam kod od prosle godine na vjezbama kad ste 
// govorili kako ispisati 2d matricu od kvadratica

function crtajKvadrate() {



    for (var i = 0; i < 11; i++) {
        for (var j = 0; j < 11; j++) {
            arr.push(new Kvadrat(i * 50, j * 50));
        }
    }

    for (var i = 0; i < arr.length; i++) {
        arr[i].crtajKvadrat();
    }

    function Kvadrat(x, y) {
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 50;
        this.color = 'rgba(231,231,231,0.8)';
        this.free = true;


        this.crtajKvadrat = function () {
            ctx.beginPath();

            ctx.rect(this.x, this.y, this.w, this.h);
            ctx.fillStyle = this.color;
            ctx.strokeStyle = "white"
            ctx.lineWidth = 2;
            ctx.fill();
            ctx.stroke();
        }
    }
}

// http://jsfiddle.net/fkvrm41s/2/
// Kod za detekciju kolizije , npr ako je kliknuto na neku tacku , da se izracuna pocetna

function collides(arr, x, y) {
    var isCollision = false;

    for (var i = 0, len = arr.length; i < len; i++) {
        var left = arr[i].x,
            right = arr[i].x + arr[i].w;

        var top = arr[i].y,
            bottom = arr[i].y + arr[i].h;

        if (right >= x &&
            left <= x &&
            bottom >= y &&
            top <= y) {
            isCollision = arr[i];
        }


    }

    return isCollision;
}


function crtajLiniju(e) {

    console.log('click: ' + e.offsetX + '/' + e.offsetY);
    var rect = collides(arr, e.offsetX, e.offsetY);


    ctx.lineWidth = 4;

    if (rect) {
        console.log('collision: ' + rect.x + '/' + rect.y);
    } else {
        console.log('no collision');
    }

    // ako je tacka gdje je kliknuto , manja od pocetne + 25(sredine kvadratica)
    // i ako je y manje od x onda je to negdje neki gornji lijevi dio npr i onda kazem
    // da crta lijevu dijagonalu pomjeravajuci je od kolizionih tacaka(pocetnih)u zeljenom smjeru
    if (rect.y + rect.x <= 250) {
        // nista 

    } else if (rect.x >= 250 && rect.y <= 50 && rect.x > rect.y) {
        // nista 
    } else if (rect.x >= 350 && rect.y <= 100 && rect.x > rect.y) {
        // nista 
    } else if (rect.x >= 400 && rect.y <= 150) {
        // nista 
    } else if (rect.x >= 450 && rect.y <= 500) {
        // nista 
    } else if (rect.x >= 300 && rect.y >= 450) {
        // nista 
    } else if (rect.x >= 350 && rect.y >= 400) {
        // nista 

    } else if (rect.x >= 400 && rect.y >= 350) {
        // nista 
    } else if (rect.x <= 50 && rect.y >= 300) {
        // nista 
    } else if (rect.x <= 100 && rect.y >= 350) {
        // nista 
    } else if (rect.x <= 200 && rect.y >= 450) {
        // nista 
    } else if (rect.x <= 250 && rect.y >= 500) {
        // nista 
    } else if (rect.x <= 150 && rect.y >= 400) {
        // nista 
    } else {


        // Desna
        if (e.offsetX >= rect.x + 37 && e.offsetX < rect.x + 50 &&
            e.offsetY <= rect.y + 38) {

            ukupne.push([rect.x, rect.y])
            ukupne.push([rect.x + 50, rect.y])
            if (inc == 1) {
                ctx.beginPath()
                ctx.strokeStyle = "red"
                ctx.moveTo(rect.x + 50, rect.y)
                // Dodao u jednu listu za zute x i y pocetnu tacku 
                // i tako za lijevu , gornju i donju
                crvene.push([rect.x, rect.y])
                crvene.push([rect.x + 50, rect.y])

                ctx.lineTo(rect.x + 50, rect.y + 50)
                ctx.stroke()
                inc = 0

            } else {
                ctx.beginPath()
                ctx.strokeStyle = "#5985e2"
                ctx.moveTo(rect.x + 50, rect.y)
                // Dodao u jednu listu za plave x i y pocetnu tacku 
                // i tako za lijevu , gornju i donju

                plave.push([rect.x, rect.y])
                plave.push([rect.x + 50, rect.y])

                ctx.lineTo(rect.x + 50, rect.y + 50)
                ctx.stroke()

                inc = 1
            }



        }

        // Gornja
        if (e.offsetX >= rect.x + 12 && e.offsetX < rect.x + 37 && e.offsetY <= rect.y + 11) {
            ukupne.push([rect.x, rect.y])
            ukupne.push([rect.x, rect.y - 50])
            if (inc == 1) {
                ctx.beginPath()
                ctx.strokeStyle = "red"
                ctx.moveTo(rect.x, rect.y)

                crvene.push([rect.x, rect.y])
                crvene.push([rect.x, rect.y - 50])

                ctx.lineTo(rect.x + 50, rect.y)
                ctx.stroke()
                inc = 0

            } else {
                ctx.beginPath()
                ctx.strokeStyle = "#5985e2"
                ctx.moveTo(rect.x, rect.y)

                plave.push([rect.x, rect.y])
                plave.push([rect.x, rect.y - 50])

                ctx.lineTo(rect.x + 50, rect.y)
                ctx.stroke()
                inc = 1
            }

        }
        // Lijeva
        if (e.offsetX <= rect.x + 9 && e.offsetY <= rect.y + 35) {
            ukupne.push([rect.x, rect.y])
            ukupne.push([rect.x - 50, rect.y])
            if (inc == 1) {
                ctx.beginPath()
                ctx.strokeStyle = "red"
                ctx.moveTo(rect.x, rect.y)

                crvene.push([rect.x, rect.y])
                crvene.push([rect.x - 50, rect.y])

                ctx.lineTo(rect.x, rect.y + 50)
                ctx.stroke()

                inc = 0
            } else {
                ctx.beginPath()
                ctx.strokeStyle = "#5985e2"
                ctx.moveTo(rect.x, rect.y)

                plave.push([rect.x, rect.y])
                plave.push([rect.x - 50, rect.y])

                ctx.lineTo(rect.x, rect.y + 50)

                ctx.stroke()
                inc = 1
            }

        }
        // Donja
        if (e.offsetX > rect.x + 12 && e.offsetY >= rect.y + 34 && e.offsetY < rect.y + 50

            &&
            e.offsetX <= rect.x + 37) {

            ukupne.push([rect.x, rect.y])
            ukupne.push([rect.x, rect.y + 50])

            if (inc == 1) {
                ctx.beginPath()
                ctx.strokeStyle = "red"
                ctx.moveTo(rect.x, rect.y + 50)

                crvene.push([rect.x, rect.y])
                crvene.push([rect.x, rect.y + 50])

                ctx.lineTo(rect.x + 50, rect.y + 50)
                ctx.stroke()

                inc = 0

            } else {
                ctx.beginPath()
                ctx.strokeStyle = "#5985e2"
                ctx.moveTo(rect.x, rect.y + 50)

                plave.push([rect.x, rect.y])
                plave.push([rect.x, rect.y + 50])

                ctx.lineTo(rect.x + 50, rect.y + 50)
                ctx.stroke()
                inc = 1
            }

        }
    }
    provjeri_crvenu_kocku()
    provjeri_plavu_kocku()
    setTimeout(trenutni_igrac, 600)
    provjeri_kraj()

    if (brojac_ukupnih == 25) {
        kraj()
    }


}
// https://www.codegrepper.com/code-examples/javascript/javascript+count+same+elements+in+array

function provjeri_kraj() {
    let counts_ukupne = {
        "100,250": 1,
        "250,100": 1,
        "400,250": 1,
        "250,400": 1,
    }

    ukupne.forEach(x => {
        counts_ukupne[x] = (counts_ukupne[x] || 0) + 1;

        if (counts_ukupne[x] == 4) {
            brojac_ukupnih += 1
            console.log("kocka", brojac_ukupnih)

            for (var i = 0; i < ukupne.length; i++) {
                if (ukupne[i] == x) {
                    delete ukupne[i]
                }
            }

        }

    })
}

function provjeri_crvenu_kocku() {
    let counts_crvene = {
        "100,250": 1,
        "400,250": 1,
    }
    crvene.forEach(function (x) {

        counts_crvene[x] = (counts_crvene[x] || 0) + 1;

        if (counts_crvene[x] == 4) {

            igrac_1_score += 1
            document.getElementById("igrac1").innerHTML = igrac_1_score;
            inc = 1

            for (var i = 0; i < crvene.length; i++) {
                if (crvene[i] == x) {
                    delete crvene[i]
                }
            }
            counts_z[x] = counts_crvene[x]
        }

    })
}

function provjeri_plavu_kocku() {

    let counts_plave = {
        "250,100": 1,
        "250,400": 1,
    }
    plave.forEach(function (x) {
        counts_plave[x] = (counts_plave[x] || 0) + 1;

        if (counts_plave[x] == 4) {

            igrac_2_score += 1
            document.getElementById("igrac2").innerHTML = igrac_2_score;
            inc = 0

            for (var i = 0; i < plave.length; i++) {

                if (plave[i] == x) {
                    delete plave[i]
                }
            }
            counts_p[x] = counts_plave[x]
        }

    })
}

function trenutni_igrac() {
    if (inc == 0) {
        document.getElementById("igrac_1").classList.remove("active")
        document.getElementById("igrac_2").classList.add("active2")
    } else {
        document.getElementById("igrac_1").classList.add("active")
        document.getElementById("igrac_2").classList.remove("active2")
    }
}


// O pobjedniku 
function kraj() {

    document.getElementById("o_pobjedniku").style.display = "block"




    if (igrac_1_score > igrac_2_score) {
        var igrac1 = document.getElementById("igrac_1").innerText;
        var pob = document.getElementById("pobjednik");
        pob.style = "padding-top:2%";
        pob.innerHTML = "Pobjednik je";
        document.getElementById("winner").innerHTML = igrac1
        document.getElementById("score").innerHTML = "<i>Score :</i>" + igrac_1_score;
        inc = 1

    } else if (igrac_2_score > igrac_1_score) {
        var igrac2 = document.getElementById("igrac_2").innerText;

        var pob = document.getElementById("pobjednik");
        pob.style = "padding-top:2%";
        pob.innerHTML = "Pobjednik je";
        document.getElementById("winner").innerHTML = igrac2;
        document.getElementById("score").innerHTML = "<i>Score :</i>" + igrac_2_score;
        inc = 0

    } else {
        var pob = document.getElementById("pobjednik");
        pob.style = "padding-top:14%";
        pob.innerHTML = "Rezultat je jednak";
        document.getElementById("winner").innerHTML = "";
        document.getElementById("score").innerHTML = "";
        inc = 1

    }
}



function crtajCanvas() {

    // Gornja lijeva uspravna x,y 
    let lijeva_gornja_uspravna_x = 250;
    let lijeva_gornja_uspravna_y = 50;

    // Gornja lijeva vodoravna x,y 
    let lijeva_gornja_vodoravna_x = 50;
    let lijeva_gornja_vodoravna_y = 250;

    // Gornja desna uspravna x,y 
    let desna_gornja_uspravna_x = 300;
    let desna_gornja_uspravna_y = 50;

    // Gornja desna vodoravna x,y 
    let desna_gornja_vodoravna_x = 300;
    let desna_gornja_vodoravna_y = 100;

    // Donja lijeva uspravna x,y 
    let lijeva_donja_uspravna_x = 100;
    let lijeva_donja_uspravna_y = 300;

    // Donja lijeva vodoravna x,y 
    let lijeva_donja_vodoravna_x = 50;
    let lijeva_donja_vodoravna_y = 300;

    // Donja desna uspravna x,y 
    let desna_donja_uspravna_x = 300;
    let desna_donja_uspravna_y = 450;

    // Donja desna vodoravna x,y 
    let desna_donja_vodoravna_x = 300;
    let desna_donja_vodoravna_y = 450;






    ctx.strokeStyle = "#636363";

    ctx.lineWidth = 4;

    for (let i = 0; i <= 4; i++) {
        if (lijeva_donja_uspravna_x <= 250 && lijeva_donja_uspravna_y <= 500) {
            ctx.beginPath()

            ctx.moveTo(lijeva_donja_uspravna_x, lijeva_donja_uspravna_y)
            ctx.lineTo(lijeva_donja_uspravna_x, lijeva_donja_uspravna_y + 50)
            ctx.stroke()
            lijeva_donja_uspravna_x += 50
            lijeva_donja_uspravna_y += 50
        }
        if (lijeva_donja_vodoravna_x <= 300 && lijeva_donja_vodoravna_y <= 500) {
            ctx.beginPath()

            ctx.moveTo(lijeva_donja_vodoravna_x, lijeva_donja_vodoravna_y)
            ctx.lineTo(lijeva_donja_vodoravna_x + 50, lijeva_donja_vodoravna_y)
            ctx.stroke()
            lijeva_donja_vodoravna_x += 50
            lijeva_donja_vodoravna_y += 50
        }
        if (desna_donja_uspravna_x <= 450 && desna_donja_uspravna_y >= 300) {
            ctx.beginPath()

            ctx.moveTo(desna_donja_uspravna_x, desna_donja_uspravna_y)
            ctx.lineTo(desna_donja_uspravna_x, desna_donja_uspravna_y + 50)
            ctx.stroke()
            desna_donja_uspravna_x += 50
            desna_donja_uspravna_y -= 50
        }
        if (desna_donja_vodoravna_x <= 500 && desna_donja_vodoravna_y >= 300) {
            ctx.beginPath()
            ctx.moveTo(desna_donja_vodoravna_x, desna_donja_vodoravna_y)
            ctx.lineTo(desna_donja_vodoravna_x + 50, desna_donja_vodoravna_y)
            ctx.stroke()
            desna_donja_vodoravna_x += 50
            desna_donja_vodoravna_y -= 50;
        }

        if (desna_gornja_uspravna_x <= 500 && desna_gornja_uspravna_y <= 300) {
            ctx.beginPath()

            ctx.moveTo(desna_gornja_uspravna_x, desna_gornja_uspravna_y)
            ctx.lineTo(desna_gornja_uspravna_x, desna_gornja_uspravna_y + 50)
            ctx.stroke()
            desna_gornja_uspravna_x += 50
            desna_gornja_uspravna_y += 50
        }
        if (desna_gornja_vodoravna_x < 500 && desna_gornja_vodoravna_y < 300) {
            ctx.beginPath()


            ctx.moveTo(desna_gornja_vodoravna_x, desna_gornja_vodoravna_y)
            ctx.lineTo(desna_gornja_vodoravna_x + 50, desna_gornja_vodoravna_y)
            ctx.stroke()
            desna_gornja_vodoravna_x += 50
            desna_gornja_vodoravna_y += 50

        }


        if (lijeva_gornja_vodoravna_x <= 250 && lijeva_gornja_vodoravna_y >= 50) {
            ctx.beginPath()
            ctx.moveTo(lijeva_gornja_vodoravna_x, lijeva_gornja_vodoravna_y)
            ctx.lineTo(lijeva_gornja_vodoravna_x + 50, lijeva_gornja_vodoravna_y)
            ctx.stroke()
            lijeva_gornja_vodoravna_x += 50
            lijeva_gornja_vodoravna_y -= 50
        }
        if (lijeva_gornja_uspravna_x >= 50 && lijeva_gornja_uspravna_y <= 250) {
            ctx.beginPath()



            ctx.moveTo(lijeva_gornja_uspravna_x, lijeva_gornja_uspravna_y);
            ctx.lineTo(lijeva_gornja_uspravna_x, lijeva_gornja_uspravna_y + 50);
            ctx.stroke()
            lijeva_gornja_uspravna_x -= 50
            lijeva_gornja_uspravna_y += 50
        }



    }
    ctx.beginPath()
    ctx.strokeStyle = "#5985e2"
    ctx.moveTo(250, 100)
    ctx.lineTo(300, 100)
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = "#5985e2"
    ctx.moveTo(250, 450)
    ctx.lineTo(300, 450)
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = "red"
    ctx.moveTo(100, 250)
    ctx.lineTo(100, 300)
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = "red"
    ctx.moveTo(450, 250)
    ctx.lineTo(450, 300)
    ctx.stroke()
}
crtajKvadrate();
crtajCanvas();
trenutni_igrac()



function igrajPonovo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    arr = [];

    ukupne = []

    crvene = [];
    plave = [];



    igrac_1_score = 0;
    igrac_2_score = 0;

    brojac_ukupnih = 0

    document.getElementById("o_pobjedniku").style.display = "none"
    document.getElementById("igrac1").innerHTML = igrac_1_score;
    document.getElementById("igrac2").innerHTML = igrac_2_score;


    crtajKvadrate()
    crtajCanvas()
    trenutni_igrac()



}
document.getElementById("promijeniImena").addEventListener("click", function () {
    document.getElementById("nova-igra-igraci").style.display = "block";
})