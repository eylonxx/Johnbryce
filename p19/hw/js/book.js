var Book = /** @class */ (function () {
    function Book(name, author, publisher, price) {
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.price = price;
    }
    Book.prototype.printInfo = function () {
        console.log(this.name, this.author, this.publisher, this.price);
    };
    Book.prototype.addVat = function () {
        return this.price * 1.17;
    };
    return Book;
}());
var oded = new Book('gay', 'gaay', 'gaay', 42);
oded.printInfo();
console.log(oded.addVat());
