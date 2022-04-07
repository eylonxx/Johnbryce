import FlightWorker from './FlightWorker';

class Pilot extends FlightWorker {
  public licenseNum: number;
  constructor(firstName: string, lastName: string, seniority: number, licenseNum: number) {
    super(firstName, lastName, seniority);
    this.licenseNum = this.licenseNum;
  }
  public display(): void {
    console.log(this.firstName, this.lastName, this.seniority, this.licenseNum);
  }
}
export default Pilot;
