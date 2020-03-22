import {Connection} from "./Connection";

class MySQLConnection implements Connection {
    private host: string;
    private puerto: string;
    private usuario: string;
    private password: string;

    constructor(host = "localhost", puerto = "3306",
                usuario = "root", password = "") {
        this.host = host;
        this.puerto = puerto;
        this.usuario = usuario;
        this.password = password;
    }
    /**
     * @description
     * Logic to connect node application to mysql db.
     *
     * @override
     */
    conectar(): void {
        console.log("[MYSQL] DB CONNECTED");
    }

    /**
     * @override
     * Logic to disconnect to mysql db.
     */
    desconectar(): void {
        console.log("[MYSQL] DB DISCONNECTED.");
    }

}

export { MySQLConnection };
