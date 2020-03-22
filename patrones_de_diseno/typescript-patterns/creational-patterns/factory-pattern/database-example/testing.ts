import {ConnectionFactory} from "./ConnectionFactory";

class Testing {
    public static main(): void {
        console.log('===FACTORY PATTERN===');
        let connectionFactory = new ConnectionFactory();

        let mysqlConnector = connectionFactory.getConnection("MYSQL");

        mysqlConnector.connect();
        mysqlConnector.disconnect();

        let PSQLConnector = connectionFactory
                            .getConnection("POSTGRESQL");
        PSQLConnector.connect();
        PSQLConnector.disconnect();

        let oracleConnector = connectionFactory.getConnection("ORACLE");
        oracleConnector.connect();
        oracleConnector.disconnect();

        let provider: string; // undefined
        let ep = connectionFactory.getConnection(provider);
        ep.connect();
        ep.disconnect();
    }
}

Testing.main();
