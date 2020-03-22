import {Connection} from "./Connection";

class PostgreSQLConnection implements Connection {
    private host: string;
    private puerto: string;
    private usuario: string;
    private password: string;

    constructor(host = "localhost", puerto = "5433",
                usuario = "postgres", password = "") {
        this.host = host;
        this.puerto = puerto;
        this.usuario = usuario;
        this.password = password;
    }
    /**
     * @override
     */
    conectar(): void {
        console.log("[POSTGRESQL] DB CONNECTED");
    }

    /**
     * @override
     */
    desconectar(): void {
        console.log("[POSTGRESQL] DB DISCONNECTED");
    }

}

export { PostgreSQLConnection };
