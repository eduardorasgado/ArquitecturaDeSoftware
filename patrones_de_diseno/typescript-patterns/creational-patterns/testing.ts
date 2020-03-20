import { HpPrinterDriver } from './hp-printer-driver';

class Main {
    public static main(): void {
        const driver = HpPrinterDriver.getInstance();
        console.log(driver.getDBProvider());
    }
}

Main.main();
