package com.eduardocode;

public class User {
    //
    public String name;

    // methods
    public User(String name) {
        this.name = name;
    }

    public void sayHello() {
        System.out.println("Hello "+this.name);
    }
}
