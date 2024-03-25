const { Client } = require('pg');

class Database {
    constructor() {
        if (!Database.instance) {
            this.client = new Client({
                user: 'postgres',
                password: '123',
                host: 'localhost',
                database: 'notas',
                port: 5432,
                ssl: {
                    rejectUnauthorized: false,
                },
            });
            Database.instance = this;
        }
        return Database.instance;
    }

    async connect() {
        await this.client.connect();
    }

    async query(sql) {
        const res = await this.client.query(sql);
        return res.rows;
    }

    async searchMaterias(materiasList) {
        for (const materia of materiasList) {
            const sql = `SELECT * FROM materias WHERE nombre = ${materia}`;
            const result = await this.query(sql);
            if (result.length === 0) {
                console.log(`No se encontró la materia: ${materia}`);
                continue;
            }
            console.log(`Se encontró la materia: ${result[0].nombre} con créditos: ${result[0].creditos}`);
        }
    }
}

// Exporta una instancia única del cliente de base de datos
const db = new Database();
module.exports = {db};
