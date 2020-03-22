import {Connection} from "./Connection";

class EmptyConnection implements Connection{
    constructor() { }

    /**
     * @override
     */
    connect(): void {
        console.log("[EMPTY] PROVIDER NOT SPECIFIED");
    }

    /**
     * @override
     */
    disconnect(): void {
        console.log("[EMPTY] PROVIDER NOT SPECIFIED");
    }

}

export { EmptyConnection };
