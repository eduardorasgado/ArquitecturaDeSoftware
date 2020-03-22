import {Dialog} from "./Dialog";
import {Button} from "./Button";
import {MaterializeButton} from "./MaterializeButton";

class MaterializeDialog extends Dialog{

    /**
     * Factory method implementation that return a Materialize button
     */
    createButton(): Button {
        return new MaterializeButton();
    }

}
