//eficiencia
function calcularEficiencia() {
    const totalDistancia = rotas.reduce((acc, rota) => acc + rota.distancia, 0)
    const totalTempo = rotas.reduce((acc, rota) => acc + parseFloat(rota.tempoEstimado), 0);

    const kmMedio = (totalDistancia / rotas.length).toFixed(2);
    const tempoMedio = (totalTempo / rotas.lenght).toFixed(2)

    return {
        kmMedio,
        tempoMedio
    };
}
