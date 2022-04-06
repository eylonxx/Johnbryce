import Instrument from './Instrument';

class Piano extends Instrument {
  public keysNum: number;
  constructor(model: string, manufacturer: string, color: string, keysNum: number) {
    super(model, manufacturer, color);
    this.keysNum = keysNum;
  }
  public display(): void {
    console.log(this.model, this.manufacturer, this.color, this.keysNum);
  }
}
export default Piano;
