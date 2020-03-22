import {Connection} from "./Connection";
import {EmptyConnection} from "./EmptyConnection";
import {MySQLConnection} from "./MySQLConnection";
import {OracleConnection} from "./OracleConnection";
import {SQLServerConnection} from "./SQLServerConnection";
import {PostgreSQLConnection} from "./PostgreSQLConnection";

/**
 * DB connection and handler provider.
 * @class
 */
class ConnectionFactory {
    constructor() { }

    /**
     * @description
     * Return an specific db connection handler.
     *
     * @param dbProvider - a relational dbms name
     */
    public getConnection(dbProvider: string): Connection {

        if(dbProvider === null || dbProvider === undefined)
            return new EmptyConnection();

        if(dbProvider.toUpperCase() === "MYSQL")
            return new MySQLConnection();
        if(dbProvider.toUpperCase() === "ORACLE")
            return new OracleConnection();
        if(dbProvider.toUpperCase() === "SQLSERVER")
            return new SQLServerConnection();
        if(dbProvider.toUpperCase() === "POSTGRESQL")
            return new PostgreSQLConnection();

        return new EmptyConnection();
    }
}

export { ConnectionFactory };
