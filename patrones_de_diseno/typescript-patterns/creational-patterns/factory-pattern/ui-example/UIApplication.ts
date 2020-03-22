import {Dialog} from "./Dialog";
import {WindowsDialog} from "./WindowsDialog";
import {HtmlDialog} from "./HtmlDialog";
import {MaterializeDialog} from "./MaterializeDialog";

/**
 * A factory that creates UI elements within a 'theme' context given by user
 */
class UIApplication {
    private dialog: Dialog;
    private windowed: boolean;

    constructor(windowed: boolean) {
        this.windowed = windowed;
    }

    private initialize(theme: string): void {
        if(theme === undefined || theme === null) return undefined;
        else if(theme.toUpperCase() === "WINDOWS")
            this.dialog = new WindowsDialog();
        else if(theme.toUpperCase() === "WEB")
            this.dialog = new HtmlDialog();
        else if(theme.toUpperCase() === "MATERIALIZE")
            this.dialog = new MaterializeDialog();
        return undefined;
    }

    public main(theme: string): void {
        if(theme !== undefined) {
            this.initialize(theme)
            this.dialog.render();
        }
        // throw error window
        else return undefined;
    }
}

export { UIApplication };
