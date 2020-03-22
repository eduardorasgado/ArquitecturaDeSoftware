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
    conectar(): void {
        console.log("[ORACLE] DB CONNECTED");
    }

    /**
     * @override
     */
    desconectar(): void {
        console.log("[ORACLE] DB DISCONNECTED");
    }

}

export { OracleConnection };
