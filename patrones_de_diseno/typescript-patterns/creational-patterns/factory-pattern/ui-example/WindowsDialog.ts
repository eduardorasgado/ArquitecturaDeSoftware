import {Dialog} from "./Dialog";
import {Button} from "./Button";
import {WindowsButton} from "./WindowsButton";

/**
 * Concrete creator, override the factory method to change the resulting product's
 * type
 */
class WindowsDialog extends Dialog {

    /**
     * Factory method implementation that return a Windows button
     */
    createButton(): Button {
        return new WindowsButton();
    }

}

export { WindowsDialog };
