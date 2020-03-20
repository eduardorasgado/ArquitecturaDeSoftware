class HpPrinterDriver {

    private static instance: HpPrinterDriver;

    // singleton constructor should be always private
    private constructor() { }

    public static getInstance(): HpPrinterDriver {
        if(!HpPrinterDriver.instance) {
            HpPrinterDriver.instance = new HpPrinterDriver();
        }
        return HpPrinterDriver.instance;
    }

    /**
     * Any singleton should define some business logic, which can be axecuted
     * on its instance
     */
    public getDBProvider(): string {
        return 'Hp';
    }
}

export { HpPrinterDriver };
