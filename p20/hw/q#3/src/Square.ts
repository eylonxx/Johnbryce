import Shape from './Shape';
class Square extends Shape {
  public color: string;
  public side: number;

  constructor(color: string, side: number) {
    super(color);
    this.side = side;
  }

  getArea(side: number): number {
    return side * side;
  }
  getPerimeter(side: number): number {
    return side * 4;
  }
  display() {
    console.log(this.color, this.side);
    console.log(this.getPerimeter(this.side), this.getArea(this.side));
  }
}
export default Square;
