public class Gorilla extends Mammal {
    public void throwSomething() {
        energy -= 5;
        System.out.println("Gorilla has thrown something. Energy decreased by 5.");
    }

    public void eatBananas() {
        energy += 10;
        System.out.println("Gorilla is satisfied after eating bananas. Energy increased by 10.");
    }

    public void climb() {
        energy -= 10;
        System.out.println("Gorilla has climbed a tree. Energy decreased by 10.");
    }
}
