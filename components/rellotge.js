
let segons = 0;

function iniciarRellotge() {

    setInterval(function() {

        segons++;

        document.getElementById("rellotge").innerHTML =
            "Temps a la pàgina: " + segons + " segons";

    }, 1000);

}
