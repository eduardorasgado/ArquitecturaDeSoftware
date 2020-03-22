import {Connection} from "./Connection";

class OracleConnection implements Connection {
    private host: string;
    private puerto: string;
    private usuario: string;
    private password: string;

    constructor(host = "localhost", puerto = "1521",
                usuario = "admin", password = "") {
        this.host = host;
        this.puerto = puerto;
        this.usuario = usuario;
        this.password = password;
    }
    /**
     * @override
     */
    connect(): void {
        console.log("[ORACLE] DB CONNECTED");
    }

    /**
     * @override
     */
    disconnect(): void {
        console.log("[ORACLE] DB DISCONNECTED");
    }

}

export { OracleConnection };
