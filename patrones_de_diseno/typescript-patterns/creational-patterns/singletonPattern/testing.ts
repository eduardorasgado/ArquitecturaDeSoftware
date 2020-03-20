import { HpPrinterDriver } from './hp-printer-driver';

class Main {
    public static main(): void {
        const driver = HpPrinterDriver.getInstance();
        const sameDriver = HpPrinterDriver.getInstance();

        console.log(driver.getDBProvider());

        if(driver == sameDriver) console.log('only one driver')
        else {
            console.log('two different drivers');
        }
    }
}

Main.main();
