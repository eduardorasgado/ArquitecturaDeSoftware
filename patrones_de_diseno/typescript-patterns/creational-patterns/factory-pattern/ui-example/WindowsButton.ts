import {Button} from "./Button";

/**
 * @author Eduardo Rasgado Ruiz
 * @implements Button
 * @class
 */
class WindowsButton implements Button {
    /**
     * @override
     */
    onClick(): void {
        console.log("[WINDOWS] click");
    }

    /**
     * @override
     */
    render(): void {
        console.log("[WINDOWS] Rendering");
    }

}

export { WindowsButton };
