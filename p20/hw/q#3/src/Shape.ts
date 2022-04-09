abstract class Shape {
  public color: string;

  constructor(color: string) {
    this.color = color;
  }

  public abstract getArea(a: number, b?: number): number;
  public abstract getPerimeter(a: number, b?: number): number;
  public abstract display(): void;
}
export default Shape;
