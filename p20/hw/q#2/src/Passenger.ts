import Person from './Person';
class Passenger extends Person {
  public passportNum: number;
  constructor(firstName: string, lastName: string, passportNum: number) {
    super(firstName, lastName);
    this.passportNum = passportNum;
  }
  public display(): void {
    console.log(this.firstName, this.lastName, this.passportNum);
  }
}
export default Passenger;
