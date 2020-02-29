package com.eduardocode;

public class Main {

    public static void main(String[] args) {
	// write your code here
        User user = new User("Eduardo", 30);
        user.sayHello();

        TaxCalculator calculator = new TaxCalculator2019();
        System.out.println(calculator.calculateTax());

        TaxCalculator calculator2 = new TaxCalculator2020();
        System.out.println(calculator2.calculateTax());
    }

    public static TaxCalculator getCalCulator() {
        return new TaxCalculator2019();
    }
}
