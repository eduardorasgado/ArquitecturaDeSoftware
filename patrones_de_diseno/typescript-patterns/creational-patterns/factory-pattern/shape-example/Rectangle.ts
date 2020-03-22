import {Shape} from "./Shape";

class Rectangle implements Shape {
    constructor() {}
    /**
     * @override
     */
    public draw(): void {
        console.log('Inside Rectangle.draw() method');
    }
}

export { Rectangle };
