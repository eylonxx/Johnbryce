import FlightAttendant from './FlightAttendant';

class AirFA extends FlightAttendant {
  public className: string;

  constructor(firstName: string, lasntName: string, seniorty: number, homeland: string, className: string) {
    super(firstName, lasntName, seniorty, homeland);
    this.className = className;
  }
  public display(): void {
    console.log(this.firstName, this.lastName, this.seniority, this.homeland, this.className);
  }
}
export default AirFA;
