package com.eduardocode;

public class Main {

    public static void main(String[] args) {
	// write your code here
        User user = new User("Eduardo", 30);
        user.sayHello();
    }

    public static TaxCalculator getCalCulator() {
        return new TaxCalculator2019();
    }
}
