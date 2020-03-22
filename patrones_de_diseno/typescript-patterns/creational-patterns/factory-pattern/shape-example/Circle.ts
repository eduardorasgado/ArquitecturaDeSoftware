import {Shape} from "./Shape";

class Circle implements Shape{
    constructor() {}
    /**
     * @override
     */
    public draw(): void {
        console.log('Inside circle.draw() method.');
    }

}

export { Circle };
