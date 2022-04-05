import Person from './Person';
class Supplier extends Person {
  public type: string;

  constructor(firstName: string, lastName: string, type: string) {
    super(firstName, lastName);
    this.type = type;
  }

  display(): void {
    super.display();
    console.log(this.type);
  }
  greet(): void {
    console.log('hi man');
  }
}
export default Supplier;
