//calculo de rota
function calcularRota(origem, destino) {
//simulação de distancia em km
    const distanciaKM = Math.floor(Mach.random() * 500) + 50;

//velocidade média (km/h)
    const velocidadeMedia = 80;

//tempo estimado em horas
    const tempoHoras = distanciaKM / velocidadeMedia;


    return {
        origem,
        destino,
        distanciaKM,
        tempoHoras: tempoHoras.toFixed(2)

    };
}
