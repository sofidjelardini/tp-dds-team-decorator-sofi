class MockBroker {
    queues: { temperatures: any[] };
    incidents: any[] = [];
    temperatureThresholdHigh: number;
    temperatureThresholdLow: number;
    lastTemperature: { [key: string]: number };

    constructor() {
        this.queues = {
            temperatures: []
        };
        this.temperatureThresholdHigh = 30;
        this.temperatureThresholdLow = 2;
        this.lastTemperature = {};

        this.startIncidentSimulation();
    }

    startIncidentSimulation() {
        setInterval(async () => {
            await this.simulateIncident();
        }, 172800000);
    }

    async crearIncidente(tipo: any, subtipo: any, heladeraId: any) {
        const incident = {
            id: Math.floor(Math.random() * 1000000),
            tipo,
            subtipo,
            heladeraId,
            fechaHora: new Date().toISOString(),
            solucionado: false
        };

        this.incidents.push(incident);
        console.log('Nuevo incidente simulado:', incident);

        await this.saveIncidentsToFile(incident);
    }

    async simulateIncident() {
        const incident = {
            id: Math.floor(Math.random() * 1000000),
            tipo: 'alerta',
            subtipo: 'falla en la conexión',
            heladeraId: 12031413,
            fechaHora: new Date().toISOString(),
            solucionado: false
        };

        await this.saveIncidentsToFile(incident);
    }

    async saveIncidentsToFile(incident: {
        id: number;
        tipo: any;
        subtipo: any;
        heladeraId: any;
        fechaHora: string;
        solucionado: boolean;
    }) {
        await fetch('/api/incidentes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(incident)
        });
        console.log('Incidentes guardados en el archivo.');
    }

    sendToQueue(queueName: 'temperatures', message: any) {
        this.queues[queueName].push(message);
    }

    receiveFromQueue(queueName: 'temperatures') {
        return this.queues[queueName].shift();
    }

    simulateTemperatureUpdates(heladeraId: string) {
        const temperatura = Math.floor(Math.random() * (35 - 1 + 1)) + 1;
        this.lastTemperature[heladeraId] = temperatura;
        this.sendToQueue('temperatures', {
            heladeraId,
            temperature: temperatura
        });
        this.chequearTemperatura(heladeraId);
    }

    async chequearTemperatura(heladeraId: string) {
        if (this.lastTemperature[heladeraId] > this.temperatureThresholdHigh) {
            this.crearIncidente('alerta', 'temperatura alta', heladeraId);
        } else if (
            this.lastTemperature[heladeraId] < this.temperatureThresholdLow
        ) {
            this.crearIncidente('alerta', 'temperatura baja', heladeraId);
        }
    }
}

export default MockBroker;
