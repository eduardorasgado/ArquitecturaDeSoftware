package com.eduardocode;

public abstract class UIControl {

    public void enable(){
        System.out.println("Enable");
    }

    public void disable(){
        System.out.println("Disable");
    }

    // improving polymorphism
    // if declare an abstract method, class must be abstract too
    public abstract void draw();
}
