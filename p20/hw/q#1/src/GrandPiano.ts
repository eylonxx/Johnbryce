import Piano from './Piano';

class GrandPiano extends Piano {
  public length: number;
  constructor(model: string, manufacturer: string, color: string, keysNum: number, length: number) {
    super(model, manufacturer, color, keysNum);
    this.length = length;
  }
  public display(): void {
    console.log(this.model, this.manufacturer, this.color, this.keysNum, this.length);
  }
}
export default GrandPiano;
