import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

export abstract class BaseDatabase {
    protected static connection = knex({
        client: 'mysql',
        connection: {
            host: "localhost",
            port: 3006,
            user: "root",
            password: "password",
            database: "PROTHEUS_2EASY",
            multipleStatements: true                             
        }
    })
}