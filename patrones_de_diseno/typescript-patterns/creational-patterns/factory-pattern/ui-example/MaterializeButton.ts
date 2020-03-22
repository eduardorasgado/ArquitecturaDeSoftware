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
    onClick(): void {
        console.log("[MATERIALIZE] click");
    }

    /**
     * @override
     */
    render(): void {
        console.log("[MATERIALIZE] Rendering");
    }

}

export { MaterializeButton };
