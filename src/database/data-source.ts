import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "next_typeorm",
    entities: ["src/database/entities/*.ts"],
    migrations: ["src/database/migrations/*.ts"],
    migrationsTableName: 'migrations',
    logging: true,
    synchronize: false,
})

export const isInitialized = AppDataSource.initialize().then(ds => ds.isInitialized);