
//Tópico 1 - Eventos
function mostrarAlerta() {
    alert("Botão clicado!");
}

//Tópico 2: Interação com Objetos
const carro = {
    marca: "Mitsubishi",
    modelo: "Lancer Evolution 2.0",
    ano: 1995,
    detalhes: function() {
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
    }
};

carro.detalhes();

//Tópico 3: Funções
function calcularMedia() {
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    var n3 = parseInt(document.getElementById("num3").value);
    var media = media = n1 + n2 + n3 / 3

    alert(`A média é: ${media}`);
}

