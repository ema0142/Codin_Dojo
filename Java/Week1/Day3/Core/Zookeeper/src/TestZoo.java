public class TestZoo {
    public static void main(String[] args) {
        System.out.println("Testing Gorilla:");
        testGorilla();
        System.out.println("\nTesting Bat:");
        testBat();
    }

    public static void testGorilla() {
        Gorilla gorilla = new Gorilla();
        gorilla.throwSomething();
        gorilla.eatBananas();
        gorilla.climb();
        gorilla.displayEnergy();
    }

    public static void testBat() {
        Bat bat = new Bat();
        bat.fly();
        bat.eatHumans();
        bat.attackTown();
        bat.displayEnergy();
    }
}
