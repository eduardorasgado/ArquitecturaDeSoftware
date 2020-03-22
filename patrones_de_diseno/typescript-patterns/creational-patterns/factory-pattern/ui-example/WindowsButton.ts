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
    public onClick(): void {
        console.log("[WINDOWS] click");
    }

    /**
     * @override
     */
    public render(): void {
        console.log("[WINDOWS] Rendering");
    }

}

export { WindowsButton };
