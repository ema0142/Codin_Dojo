// Mammal.java
public class Mammal {
    protected int energy;

    public Mammal() {
        this.energy = 100; // Default energy level for mammals
    }

    public int displayEnergy() {
        System.out.println("Energy Level: " + energy);
        return energy;
    }
}
