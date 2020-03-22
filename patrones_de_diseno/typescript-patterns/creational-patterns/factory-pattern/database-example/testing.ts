import {ConnectionFactory} from "./ConnectionFactory";
import {Connection} from "./Connection";

class Testing {
    public static main(): void {
        console.log('===FACTORY PATTERN===');
        let connectionFactory: ConnectionFactory = new ConnectionFactory();

        let mysqlConnector: Connection =
            connectionFactory.getConnection("MYSQL");

        mysqlConnector.connect();
        mysqlConnector.disconnect();

        let PSQLConnector: Connection = connectionFactory
                            .getConnection("POSTGRESQL");
        PSQLConnector.connect();
        PSQLConnector.disconnect();

        let oracleConnector: Connection =
            connectionFactory.getConnection("ORACLE");
        oracleConnector.connect();
        oracleConnector.disconnect();

        let provider: string; // undefined
        let ep: Connection = connectionFactory.getConnection(provider);
        ep.connect();
        ep.disconnect();
    }
}

Testing.main();
