import {UIThemes} from "./UIThemes";
import {UIApplication} from "./UIApplication";

class Testing {
    public static main() {
        let webAppTheme: string = UIThemes.web;
        let windowsAppTheme: string = UIThemes.windows;
        let materialAppTheme: string = UIThemes.materialize;

        let appProvider: UIApplication = new UIApplication(true);

        // different ways to create an app deppending on theme user wants to use.
        appProvider.main(webAppTheme);
        appProvider.main(windowsAppTheme);
        appProvider.main(materialAppTheme);
    }
}

Testing.main();
