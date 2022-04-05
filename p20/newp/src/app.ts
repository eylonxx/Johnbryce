import Employee from './employee';
import Customer from './customer';
import Supplier from './supplier';
import Manager from './manager';
import Person from './Person';

// myEmployee.display();
// myEmployee.greet();

// myCustomer.display();
// myCustomer.greet();

// mySupplier.display();
// mySupplier.greet();

// myManager.display();
// myManager.greet();

const myEmployee = new Employee('bart', 'Simpson', 10000);
const mySupplier = new Supplier('oded', 'ro', 'drugs');
const myCustomer = new Customer('Lissa', 'Simpson', '416516519819884');
const myManager = new Manager('eylon', 'perets', 300, '420');

const people: Person[] = [myEmployee, mySupplier, myManager, myCustomer];

for (let p of people) {
  p.display();
  p.greet();
  if (p instanceof Customer) {
    console.log(p.creditCard.slice(-4));
  }
  console.log('-----------');
}
