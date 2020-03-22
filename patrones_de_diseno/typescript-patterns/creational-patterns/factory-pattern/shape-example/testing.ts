import {ShapeFactory} from "./ShapeFactory";

class Main {
    public static main(): void {
        console.log('===factory pattern===');
        let shapeFactory = new ShapeFactory();
        let concreteCircle = shapeFactory.getShape("circle");
        concreteCircle.draw();
    }
}

Main.main();
