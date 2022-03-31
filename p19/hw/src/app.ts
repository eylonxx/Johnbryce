class Perfume {
  name: string;
  brand: string;
  qty: number;
  forGender: string;
  price: number;
  constructor(name: string, brand: string, qty: number, forGender: string, price: number) {
    this.name = name;
    this.brand = brand;
    this.qty = qty;
    this.forGender = forGender;
    this.price = price;
  }
  displayInfo() {
    console.log(this.name, this.brand, this.qty, this.forGender, this.price);
  }
  addVat() {
    return this.price * 1.17;
  }
}

class Employee {
  firstName: string;
  lastName: string;
  address: string;
  salary: number;
  constructor(firstName: string, lastName: string, address: string, salary: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.salary = salary;
  }
  displayInfo() {
    console.log(this.firstName, this.lastName, this.address, this.salary);
  }
  addTax() {
    return this.salary * 0.1;
  }
}

const dor = new Perfume('dor', 'krop', 300, 'men', 50000);
const hohyeon = new Perfume('hohyeon', 'korea', 300, 'men', 50333000);
dor.displayInfo();
console.log(dor.addVat());
hohyeon.displayInfo();
console.log(hohyeon.addVat());

const odedro = new Employee('oded', 'rosenfart', 'ausslichlisseche', 30);
const yuval = new Employee('yuval', '???', 'hokoko', 3033333333333333333);
odedro.displayInfo();
console.log(odedro.addTax());
yuval.displayInfo();
console.log(yuval.addTax());
