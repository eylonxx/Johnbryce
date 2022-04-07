import Person from './Person';

abstract class FlightWorker extends Person {
  public seniority: number;
  constructor(firstName: string, lastName: string, seniority: number) {
    super(firstName, lastName);
    this.seniority = seniority;
  }
  public abstract display(): void;
}
export default FlightWorker;
