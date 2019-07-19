public class ShoppingBasket {
    private IPaymentMethod paymentMethod;
    private IPersistance persistance;
  
    public ShoppingBasket(
        IPaymentMethod paymentMethod,
        IPersistance persistance
    ) {
      this.persistance = persistance;
      this.paymentMethod = paymentMethod;
    }
  
    public void buy(Shopping shopping) {
      this.persistance.save(shopping);
      this.paymentMethod.pay(shopping);
    }
}