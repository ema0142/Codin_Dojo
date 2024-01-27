public class Bat extends Mammal {
    public Bat() {
        this.energy = 300; 
    }

    public void fly() {
        energy -= 50;
        System.out.println("Bat is airborne. Energy decreased by 50.");
    }

    public void eatHumans() {
        energy += 25;
        System.out.println("Bat is satisfied after eating humans. Energy increased by 25.");
    }

    public void attackTown() {
        energy -= 100;
        System.out.println("Bat has attacked a town. Energy decreased by 100.");
    }
}
