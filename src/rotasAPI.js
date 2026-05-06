// rotaOSM.js
const axios = require('axios');

async function calcularRotaOSM(origem, destino) {
    try {
        // origem e destino no formato "longitude,latitude"
        const url = `http://router.project-osrm.org/route/v1/driving/${origem};${destino}?overview=false`;

        const response = await axios.get(url);
        const rota = response.data.routes[0];

        return {
            distancia: (rota.distance / 1000).toFixed(2) + " km",
            tempoEstimado: (rota.duration / 3600).toFixed(2) + " horas"
        };
    } catch (error) {
        console.error(error);
        return { erro: "Não foi possível calcular a rota" };
    }
}

module.exports = calcularRotaOSM;
