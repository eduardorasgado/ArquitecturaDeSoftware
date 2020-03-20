import { HpPrinterDriver } from './hp-printer-driver';
import { Database } from './database';

class Main {
    public static main(): void {
        const driver = HpPrinterDriver.getInstance();
        const sameDriver = HpPrinterDriver.getInstance();

        console.log(driver.getDBProvider());

        if(driver == sameDriver) console.log('only one driver')
        else {
            console.log('two different drivers');
        }

        const db = Database.getInstance();
        console.log(db.query('select * from db...'));
    }
}

Main.main();
