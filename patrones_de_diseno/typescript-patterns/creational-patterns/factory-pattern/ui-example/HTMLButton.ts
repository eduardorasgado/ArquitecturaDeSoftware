import {Button} from "./Button";

/**
 * @author Eduardo Rasgado Ruiz
 * @implements Button
 * @class
 */
class HTMLButton implements Button {
    /**
     * @override
     */
    public onClick(): void {
        console.log("[HTML] click");
    }

    /**
     * @override
     */
    public render(): void {
        console.log("[HTML] Rendering");
    }

}

export { HTMLButton };
