import Instrument from './Instrument';

class Guitar extends Instrument {
  public stringsNum: number;
  constructor(model: string, manufacturer: string, color: string, stringsNum: number) {
    super(model, manufacturer, color);
  }
  display() {
    console.log(this.model, this.manufacturer, this.color, this.stringsNum);
  }
}
export default Guitar;
