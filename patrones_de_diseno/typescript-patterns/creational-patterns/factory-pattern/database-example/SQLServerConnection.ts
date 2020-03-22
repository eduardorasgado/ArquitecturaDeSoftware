import {Connection} from "./Connection";

class SQLServerConnection implements Connection {
    private host: string;
    private puerto: string;
    private usuario: string;
    private password: string;

    constructor(host = "localhost", puerto = "1111",
                usuario = "sqlserver", password = "") {
        this.host = host;
        this.puerto = puerto;
        this.usuario = usuario;
        this.password = password;
    }
    /**
     * @override
     */
    conectar(): void {
        console.log("[SQLSERVER] DB CONNECTED");
    }

    /**
     * @override
     */
    desconectar(): void {
        console.log("[SQLSERVER] DB DISCONNECTED");
    }

}

export { SQLServerConnection };
