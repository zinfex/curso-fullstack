import mysql from 'mysql'
import { makeDb } from 'mysql-async-simple'
import * as dotenv from 'dotenv'
dotenv.config()

class Conexao {
    constructor() {
        this.connection = mysql.createConnection({
            host    : process.env.DB_HOST,
            user    : process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        })
        this.db = makeDb()
    }

    async query (sql, dados) {
        await this.db.connect(this.connection);
        try {
            const data = await this.db.query(this.connection, sql, dados)
            return data
        } catch(e) {
            throw e
        } finally {
            await this.db.close(this.connection)
        }
    }
}

export default Conexao