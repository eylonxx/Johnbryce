"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var employee_1 = __importDefault(require("./employee"));
var customer_1 = __importDefault(require("./customer"));
var supplier_1 = __importDefault(require("./supplier"));
var manager_1 = __importDefault(require("./manager"));
// myEmployee.display();
// myEmployee.greet();
// myCustomer.display();
// myCustomer.greet();
// mySupplier.display();
// mySupplier.greet();
// myManager.display();
// myManager.greet();
var myEmployee = new employee_1.default('bart', 'Simpson', 10000);
var mySupplier = new supplier_1.default('oded', 'ro', 'drugs');
var myCustomer = new customer_1.default('Lissa', 'Simpson', '416516519819884');
var myManager = new manager_1.default('eylon', 'perets', 300, '420');
var people = [myEmployee, mySupplier, myManager, myCustomer];
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var p = people_1[_i];
    p.display();
    p.greet();
    if (p instanceof customer_1.default) {
        console.log(p.creditCard.slice(-4));
    }
    console.log('-----------');
}
