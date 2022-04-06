import Instrument from './Instrument';

class Drums extends Instrument {
  public diameter: number;
  constructor(model: string, manufacturer: string, color: string, diameter: number) {
    super(model, manufacturer, color);
    this.diameter = diameter;
  }
  public display(): void {
    console.log(this.model, this.manufacturer, this.color, this.diameter);
  }
}
export default Drums;
