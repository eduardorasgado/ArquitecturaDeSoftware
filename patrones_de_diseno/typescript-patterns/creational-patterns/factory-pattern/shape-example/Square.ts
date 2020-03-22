import {Shape} from "./Shape";

class Square implements Shape{
    constructor() { }
    /**
     * @override
     */
    draw(): void {
        console.log('Inside Square.draw() method.');
    }

}

export { Square };
