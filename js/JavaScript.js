
function mostrarAlerta() {
    alert("Botão clicado!");
}

const carro = {
    marca: "Mitsubishi",
    modelo: "Lancer Evolution 2.0",
    ano: 1995,
    detalhes: function() {
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
    }
};

// Chama o método detalhes para exibir no console
carro.detalhes();

