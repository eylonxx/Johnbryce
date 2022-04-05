import Person from './Person';
class Employee extends Person {
  public salary: number;

  constructor(firstName: string, lastName: string, salary: number) {
    super(firstName, lastName);
    this.salary = salary;
  }

  display(): void {
    super.display();
    console.log(this.salary);
  }
  greet(): void {
    console.log('hi sir');
  }
}
export default Employee;
