// Class - template for Cat objects:
class Cat {
  // Fields / Data Members:
  public name: string;
  private _age: number;
  public color: string;
  private chipCode: number;
  private _price: number;

  // Constructor:
  public constructor(name: string, age: number, color: string, price: number) {
    // age --> local variable
    // this.age --> object variable
    this.name = name;
    this._age = age;
    this.color = color;
    this.chipCode = Math.floor(Math.random() * 1000000);
    this._price = price;
    console.log('One cat object has been created.');
  }
  public get age(): number {
    return this._age;
  }

  public set age(value: number) {
    if (value < 0 || value > 30) {
      throw new Error('oh no');
    }
    this._age = value;
  }

  ///////////

  public get price(): number {
    return this._price;
  }

  public set price(value: number) {
    if (value < 0 || value > 100) {
      throw new Error('oh no must be ...');
    }
    this._price = value;
  }
  // Methods:
  public eat(): void {
    console.log(this.name + ' is eating...');
  }

  public display(): void {
    console.log('Name: ' + this.name);
    console.log('Age: ' + this._age);
    console.log('Color: ' + this.color);
    console.log('Chip Code: ' + this.chipCode);
  }
}

export default Cat;
