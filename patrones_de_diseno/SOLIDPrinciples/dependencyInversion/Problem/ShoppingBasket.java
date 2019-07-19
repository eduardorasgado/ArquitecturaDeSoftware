public class ShoppingBasket {
    public void buy(Shopping shopping) {
      Database db = new Database();
      db.save(shopping);
  
      CreditCard c = new CreditCard();
      c.pay();
    }
}