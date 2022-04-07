import FlightAttendant from './FlightAttendant';

class GroundFA extends FlightAttendant {
  public groundJob: string;

  constructor(firstName: string, lasntName: string, seniorty: number, homeland: string, groundJob: string) {
    super(firstName, lasntName, seniorty, homeland);
    this.groundJob = groundJob;
  }
  public display(): void {
    console.log(this.firstName, this.lastName, this.seniority, this.homeland, this.groundJob);
  }
}
export default GroundFA;
