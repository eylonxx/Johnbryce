abstract class Instrument {
  public model: string;
  public manufacturer: string;
  public color: string;

  constructor(model: string, manufacturer: string, color: string) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.color = color;
  }
  public abstract display(): void;
}
export default Instrument;
