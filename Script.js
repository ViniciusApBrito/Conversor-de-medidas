function verificar() {
    var numero = document.getElementById("numero").value;
    var stringNumero = numero.toString();
    var stringInvertida = stringNumero.split("").reverse().join("");

    if (stringNumero === stringInvertida) {
        document.getElementById("resultado").innerHTML = "O número " + numero + " é um palíndromo.";
    }
    else {
        document.getElementById("resultado").innerHTML = "O número " + numero + " não é um palíndromo.";
    }
}
