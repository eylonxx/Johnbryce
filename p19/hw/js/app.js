var Perfume = /** @class */ (function () {
    function Perfume(name, brand, qty, forGender, price) {
        this.name = name;
        this.brand = brand;
        this.qty = qty;
        this.forGender = forGender;
        this.price = price;
    }
    Perfume.prototype.displayInfo = function () {
        console.log(this.name, this.brand, this.qty, this.forGender, this.price);
    };
    Perfume.prototype.addVat = function () {
        return this.price * 1.17;
    };
    return Perfume;
}());
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, address, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.salary = salary;
    }
    Employee.prototype.displayInfo = function () {
        console.log(this.firstName, this.lastName, this.address, this.salary);
    };
    Employee.prototype.addTax = function () {
        return this.salary * 0.1;
    };
    return Employee;
}());
var dor = new Perfume('dor', 'krop', 300, 'men', 50000);
var hohyeon = new Perfume('hohyeon', 'korea', 300, 'men', 50333000);
dor.displayInfo();
console.log(dor.addVat());
hohyeon.displayInfo();
console.log(hohyeon.addVat());
var odedro = new Employee('oded', 'rosenfart', 'ausslichlisseche', 30);
var yuval = new Employee('yuval', '???', 'hokoko', 3033333333333333333);
odedro.displayInfo();
console.log(odedro.addTax());
yuval.displayInfo();
console.log(yuval.addTax());
