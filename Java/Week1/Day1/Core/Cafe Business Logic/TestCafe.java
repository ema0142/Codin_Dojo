import java.util.ArrayList;

public class TestCafe {
    public static void main(String[] args) {
        CafeUtil CafeNew = new CafeUtil();

        // Test getStreakGoal method
        int streakGoal = CafeNew.getStreakGoal();
        System.out.println("Purchases needed by week 10: " + streakGoal);

        // Test getOrderTotal method
        double[] prices = {3.5, 1.5, 4.0, 4.5};
        double orderTotal = CafeNew.getOrderTotal(prices);
        System.out.printf("Order total: %.2f\n", orderTotal);

        // Test displayMenu method
        ArrayList<String> menu = new ArrayList<>();
        menu.add("drip coffee");
        menu.add("cappuccino");
        menu.add("latte");
        menu.add("mocha");
        CafeNew.displayMenu(menu);
    }
}
