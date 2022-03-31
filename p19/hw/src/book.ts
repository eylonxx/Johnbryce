class Book {
  name: string;
  author: string;
  publisher: string;
  price: number;

  constructor(name: string, author: string, publisher: string, price: number) {
    this.name = name;
    this.author = author;
    this.publisher = publisher;
    this.price = price;
  }

  printInfo(): void {
    console.log(this.name, this.author, this.publisher, this.price);
  }

  addVat(): number {
    return this.price * 1.17;
  }
}

const oded = new Book('gay', 'gaay', 'gaay', 42);
oded.printInfo();
console.log(oded.addVat());
