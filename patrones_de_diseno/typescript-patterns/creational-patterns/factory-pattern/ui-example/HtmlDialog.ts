import {Dialog} from "./Dialog";
import {Button} from "./Button";
import {HTMLButton} from "./HTMLButton";

class HtmlDialog extends Dialog{

    /**
     * Factory method implementation that return a HTML button
     */
    protected createButton(): Button {
        return new HTMLButton();
    }

}

export { HtmlDialog };
