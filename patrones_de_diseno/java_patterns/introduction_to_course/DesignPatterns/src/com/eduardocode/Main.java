package com.eduardocode;

public class Main {

    public static void main(String[] args) {
	// write your code here
        User user = new User("Eduardo", 30);
        user.sayHello();

        TaxCalculator calculator = getCalCulator();
        System.out.println(calculator.calculateTax());

        TaxCalculator calculator2 = getActualCalCulator();
        System.out.println(calculator2.calculateTax());

        Account account = new Account();
        account.deposit(10);
        account.withdraw(5);
        System.out.println(account.getBalance());

        // abstraction
        MailService mailService = new MailService();
        mailService.sendEmail();

        // inheritance

        //textbox
        // button
        // checkbox

        // enable
        // focus
        // setPosition
        TextBox textBox = new TextBox();
        textBox.enable();
    }

    public static TaxCalculator getCalCulator() {
        return new TaxCalculator2019();
    }

    public static TaxCalculator getActualCalCulator() {
        return new TaxCalculator2020();
    }
}
