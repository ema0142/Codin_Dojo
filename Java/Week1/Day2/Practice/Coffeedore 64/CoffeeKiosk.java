import java.util.ArrayList;
import java.util.Scanner;

public class CoffeeKiosk {
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;

    public CoffeeKiosk(){
        this.menu = new ArrayList<Item>();
        this.orders = new ArrayList<Order>();
    }

    public void addMenuItem(String name, double price){
        Item newItem = new Item(name, price);
        menu.add(newItem);
        newItem.setIndex(menu.indexOf(newItem));
    }

    public void displayMenu(){
        for(Item item : menu){
            System.out.println(item.getIndex()+" "+item.getName()+" -- $"+item.getPrice());
        }
    }

    public void newOrder() {
        Scanner scanner = new Scanner(System.in);
        
        // Shows the user a message prompt and then sets their input to a variable, name
        System.out.println("Please enter customer name for new order:");
        String name = scanner.nextLine();
    
        // Your code:
        // Create a new order with the given input string
        Order order = new Order(name);
        // Show the user the menu, so they can choose items to add.
        displayMenu();
        
        // Prompts the user to enter an item number
        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = scanner.nextLine();
        
        // Write a while loop to collect all user's order items
        while(!itemNumber.equals("q")) {
            try{
                int index = Integer.parseInt(itemNumber);
                if(index >= 0 && index < menu.size()) {
                    // Get the item object from the menu, and add the item to the order
                    order.addItem(menu.get(index));
                } else {
                    System.out.println("Invalid selection. Please try again.");
                }
            } catch(NumberFormatException e) {
                System.out.println("Invalid selection. Please try again.");
            }
         
            System.out.println("Please enter a menu item index or q to quit:");
            itemNumber = scanner.nextLine();
        }
       
        
        order.display();        
    }
}
