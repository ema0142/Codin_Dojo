import java.util.ArrayList;

public class CafeUtil {

    public int getStreakGoal() {
        int sum = 0;
        for (int i = 1; i <= 10; i++) {
            sum += i;
        }
        return sum;
    }

    public double getOrderTotal(double[] prices) {
        double total = 0;
        for (double price : prices) {
            total += price;
        }
        return total;
    }

    public void displayMenu(ArrayList<String> menuItems) {
        for (int i = 0; i < menuItems.size(); i++) {
            System.out.println(i + " " + menuItems.get(i));
        }
    }

    public void addCustomer(ArrayList<String> customers) {
        System.out.println("Please enter your name:");
        String username = System.console().readLine();
        System.out.println("Hello, " + username + "!");
        int ahead = customers.size();
        System.out.println("There are " + ahead + " people in front of you.");
        customers.add(username);
        System.out.println(customers);
    }

    public void printPriceChart(String product, double price, int maxQuantity) {
        System.out.println(product);
        for (int i = 1; i <= maxQuantity; i++) {
            double total = price * i;
            System.out.printf("%d - $%.2f\n", i, total);
            price -= 0.50; // Applying discount
        }
    }

    public boolean displayMenu(ArrayList<String> menuItems, ArrayList<Double> prices) {
        if (menuItems.size() != prices.size()) {
            return false; // Return false if the arrays are not the same size
        }

        for (int i = 0; i < menuItems.size(); i++) {
            System.out.printf("%d %s -- $%.2f\n", i, menuItems.get(i), prices.get(i));
        }
        return true;
    }

    public void addCustomers(ArrayList<String> customers) {
        while (true) {
            System.out.println("Please enter customer's name (type 'q' to quit):");
            String input = System.console().readLine();
            if (input.equals("q")) {
                break;
            }
            customers.add(input);
        }
    }
}
