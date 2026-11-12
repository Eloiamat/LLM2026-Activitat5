
function comprovarPassword() {

    let password1 = document.getElementById("password1").value;

    let password2 = document.getElementById("password2").value;


    if (password1.length < 8) {

        alert("Error: La contrasenya ha de tenir mínim 8 caràcters.");

    }

    else if (password1 != password2) {

        alert("Error: Les contrasenyes no coincideixen.");

    }

    else {

        alert("S'ha canviat correctament la contrasenya");

    }

}
