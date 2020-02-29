package com.eduardocode;

public class User {
    //
    public String name;
    public int age;

    // methods
    public User(String name, int age) {
        this.name = name;
    }

    public void sayHello() {
        System.out.println("-Hi, my name is "+this.name);
    }
}
