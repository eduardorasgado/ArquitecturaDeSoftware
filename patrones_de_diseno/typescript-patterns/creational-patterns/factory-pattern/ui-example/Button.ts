/**
 * @description
 * The product interface declares the operations that all
 * concrete products must implement.
 *
 * @interface
 */
interface Button {

    render(): void;
    onClick(): void;
}

export { Button };
