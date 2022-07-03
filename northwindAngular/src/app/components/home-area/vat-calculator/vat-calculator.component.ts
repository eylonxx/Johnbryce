import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.css'],
})
export class VatCalculatorComponent implements OnInit {
  public price: string = '';

  constructor() {}

  ngOnInit(): void {}

  public getVat(): number {
    const vat = +this.price * 2;
    return vat;
  }

  public displayPrice(): void {
    alert(`Price is ${this.price}, VAT is ${this.getVat()}`);
    this.price = '';
  }
}
