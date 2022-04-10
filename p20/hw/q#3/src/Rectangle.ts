import Shape from './Shape';
class Rectangle extends Shape {
  public height: number;
  public width: number;
  constructor(color: string, height: number, width: number) {
    super(color);
    this.height = height;
    this.width = width;
  }
  public getArea(height: number, width: number): number {
    return height * width;
  }

  public getPerimeter(height: number, width: number): number {
    return height * 2 + width * 2;
  }

  public display(): void {
    console.log(this.color, this.height, this.width);
    console.log(this.getArea(this.height, this.width), this.getPerimeter(this.height, this.width));
  }
}
export default Rectangle;
