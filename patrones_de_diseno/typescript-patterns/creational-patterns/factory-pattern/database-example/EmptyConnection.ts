import {Connection} from "./Connection";

class EmptyConnection implements Connection{
    /**
     * @override
     */
    conectar(): void {
    }

    /**
     * @override
     */
    desconectar(): void {
    }

}
