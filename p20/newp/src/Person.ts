abstract class Person {
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  display(): void {
    console.log(this.firstName, this.lastName);
  }

  public abstract greet(): void;
}
export default Person;
