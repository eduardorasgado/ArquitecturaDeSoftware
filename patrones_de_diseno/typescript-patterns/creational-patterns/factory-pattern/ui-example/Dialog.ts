import {Button} from "./Button";

/**
 * @description
 * The creator class declares the factory method that must return an object of
 * a button class.
 * @class
 */
abstract class Dialog {

    /**
     * @description
     * ======== FACTORY METHOD ========
     * As abstract method
     * This method is implemented by concrete dialogs
     *
     * Note that, despite its name, the creator's primary
     * responsibility isn't creating products. It usually
     * contains some core business logic that relies on product
     * objects returned by the factory method. Subclasses can
     * indirectly change that business logic by overriding the
     * factory method and returning a different type of product
     * from it.
     */
    protected abstract createButton(): Button;

    public render(): void {
        let okButton: Button = this.createButton();
        okButton.onClick();
        okButton.render();
    }
}

export { Dialog };
