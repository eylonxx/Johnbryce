import Shape from './Shape';
import CircularShape from './CircularShape';

class Circle extends Shape implements CircularShape {
  public radius: number;
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  public getArea(radius: number): number {
    return Math.PI * radius * radius;
  }
  public getPerimeter(radius: number): number {
    return 2 * Math.PI * radius;
  }
  public display(): void {
    console.log(this.color, this.radius);
    console.log(this.getArea(this.radius), this.getPerimeter(this.radius), this.getDiameter(this.radius));
  }
  public getDiameter(radius: number): number {
    return radius * 2;
  }
}
export default Circle;
