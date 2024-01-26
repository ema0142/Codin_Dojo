public class BankTest {
    public static void main(String[] args) {
        // Create 3 bank accounts
        BankAccount acc1 = new BankAccount();
        BankAccount acc2 = new BankAccount();
        BankAccount acc3 = new BankAccount();

        // Deposit Test
        System.out.println("Depositing money into accounts:");
        acc1.deposit("checking", 1000);
        acc2.deposit("savings", 2000);
        acc3.deposit("checking", 1500);

        // Display balances
        System.out.println("Account 1 balance:");
        acc1.getBalance();
        System.out.println("Account 2 balance:");
        acc2.getBalance();
        System.out.println("Account 3 balance:");
        acc3.getBalance();

        // Withdrawal Test
        System.out.println("\nWithdrawing money from accounts:");
        acc1.withdraw("checking", 500);
        acc2.withdraw("savings", 300);
        acc3.withdraw("checking", 2000);

        // Display balances after withdrawal
        System.out.println("Account 1 balance after withdrawal:");
        acc1.getBalance();
        System.out.println("Account 2 balance after withdrawal:");
        acc2.getBalance();
        System.out.println("Account 3 balance after withdrawal:");
        acc3.getBalance();

        // Static Test
        System.out.println("\nNumber of bank accounts: " + BankAccount.getAccounts());
        System.out.println("Total money across all accounts: " + BankAccount.getTotalMoney());
    }
}
