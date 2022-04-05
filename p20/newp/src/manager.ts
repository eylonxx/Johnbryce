import Employee from './Employee';
class Manager extends Employee {
  public options: string;

  constructor(firstName: string, lastName: string, salary: number, options: string) {
    super(firstName, lastName, salary);
    this.options = options;
  }

  display(): void {
    super.display();
  }
}
export default Manager;
