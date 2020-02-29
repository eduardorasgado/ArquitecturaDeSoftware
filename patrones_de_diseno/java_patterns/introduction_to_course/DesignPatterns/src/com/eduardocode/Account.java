package com.eduardocode;

public class Account {
    // encapsulation
    private float balance;

    public Account() {

    }

    public float getBalance() {
        return balance;
    }

    public void deposit(float amount) {
        if(amount > 0) {
            this.balance += amount;
        }
    }

    public void withdraw(float amount) {
        if(amount > 0){
            this.balance -= amount;
        }
    }
}
