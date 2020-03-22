import {Button} from "./Button";

/**
 * @author Eduardo Rasgado Ruiz
 * @implements Button
 * @class
 */
class MaterializeButton implements Button {
    /**
     * @override
     */
    public onClick(): void {
        console.log("[MATERIALIZE] click");
    }

    /**
     * @override
     */
    public render(): void {
        console.log("[MATERIALIZE] Rendering");
    }

}

export { MaterializeButton };
