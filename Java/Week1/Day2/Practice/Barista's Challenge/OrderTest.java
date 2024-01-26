public class OrderTest {
    public static void main(String[] args) {
        // Creating orders for unspecified guests
        Order order1 = new Order();
        Order order2 = new Order();

        // Creating orders with specified names
        Order order3 = new Order("John");
        Order order4 = new Order("Alice");
        Order order5 = new Order("Bob");

        // Adding items to orders
        order1.addItem(new Item("Drip Coffee", 1.50));
        order1.addItem(new Item("Cappuccino", 3.50));

        order2.addItem(new Item("Latte", 2.00));
        order2.addItem(new Item("Muffin", 2.50));

        order3.addItem(new Item("Espresso", 2.00));
        order3.addItem(new Item("Croissant", 3.00));

        order4.addItem(new Item("Iced Coffee", 2.50));
        order4.addItem(new Item("Bagel", 1.50));

        order5.addItem(new Item("Americano", 2.00));
        order5.addItem(new Item("Danish", 2.50));

        // Testing getStatusMessage method
        order1.setReady(true);
        order3.setReady(true);
        System.out.println("Order 1 Status: " + order1.getStatusMessage());
        System.out.println("Order 2 Status: " + order2.getStatusMessage());
        System.out.println("Order 3 Status: " + order3.getStatusMessage());
        System.out.println("Order 4 Status: " + order4.getStatusMessage());
        System.out.println("Order 5 Status: " + order5.getStatusMessage());

        // Testing getOrderTotal method
        System.out.println("Order 1 Total: $" + order1.getOrderTotal());
        System.out.println("Order 2 Total: $" + order2.getOrderTotal());
        System.out.println("Order 3 Total: $" + order3.getOrderTotal());
        System.out.println("Order 4 Total: $" + order4.getOrderTotal());
        System.out.println("Order 5 Total: $" + order5.getOrderTotal());

        // Calling display method on all orders
        System.out.println("\nOrder 1:");
        order1.display();
        System.out.println("\nOrder 2:");
        order2.display();
        System.out.println("\nOrder 3:");
        order3.display();
        System.out.println("\nOrder 4:");
        order4.display();
        System.out.println("\nOrder 5:");
        order5.display();
    }
}
