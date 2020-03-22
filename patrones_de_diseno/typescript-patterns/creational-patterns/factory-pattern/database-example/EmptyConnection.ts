import {Connection} from "./Connection";

class EmptyConnection implements Connection{
    constructor() { }

    /**
     * @override
     */
    conectar(): void {
        console.log("[EMPTY] PROVIDER NOT SPECIFIED");
    }

    /**
     * @override
     */
    desconectar(): void {
        console.log("[EMPTY] PROVIDER NOT SPECIFIED");
    }

}

export { EmptyConnection };
