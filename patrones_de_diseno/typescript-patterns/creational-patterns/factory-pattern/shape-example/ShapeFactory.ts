import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

/**
 * A factory to generate object of concrete class based on given information
 * @class
 * @author Eduardo Rasgado Ruiz
 */
class ShapeFactory{
    constructor() {}

    /**
     * creating an instance that implements Shape, given certain parameter.
     *
     * @param shapeType
     */
    public getShape(shapeType: string): Shape {
        if(shapeType == null) return null;
        if(shapeType.toUpperCase() === "CIRCLE") return new Circle();
        if(shapeType.toUpperCase() === "RECTANGLE") return new Rectangle();
        if(shapeType.toUpperCase() === "SQUARE") return new Square();
        return null;
    }
}

export { ShapeFactory };
