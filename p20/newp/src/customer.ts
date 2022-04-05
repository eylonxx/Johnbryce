import Person from './Person';

class Customer extends Person {
  public creditCard: string;

  constructor(firstName: string, lastName: string, creditCard: string) {
    super(firstName, lastName);
    this.creditCard = creditCard;
  }

  display(): void {
    super.display();
    console.log(this.creditCard);
  }
  greet(): void {
    console.log('hi bro');
  }
}
export default Customer;
