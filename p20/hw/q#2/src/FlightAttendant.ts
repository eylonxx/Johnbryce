import FlightWorker from './FlightWorker';

abstract class FlightAttendant extends FlightWorker {
  public homeland: string;
  constructor(firstName: string, lastName: string, seniority: number, homeland: string) {
    super(firstName, lastName, seniority);
    this.homeland = homeland;
  }
  public abstract display(): void;
}
export default FlightAttendant;
