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
    onClick(): void {
        console.log("[HTML] click");
    }

    /**
     * @override
     */
    render(): void {
        console.log("[HTML] Rendering");
    }

}

export { HTMLButton };
