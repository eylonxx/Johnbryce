abstract class Shape {
  public color: string;
  public static count: number = 0;

  constructor(color: string) {
    this.color = color;
    Shape.count++;
  }

  public abstract getArea(a: number, b?: number): number;
  public abstract getPerimeter(a: number, b?: number): number;
  public abstract display(): void;
}
export default Shape;
