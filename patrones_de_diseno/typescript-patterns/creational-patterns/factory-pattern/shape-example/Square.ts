import {Shape} from "./Shape";

class Square implements Shape{
    constructor() { }
    /**
     * @override
     */
    public draw(): void {
        console.log('Inside Square.draw() method.');
    }

}

export { Square };
