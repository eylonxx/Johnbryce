import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.css'],
})
export class VatCalculatorComponent implements OnInit {
  public price: number = 0;
  public vat: number = 0;

  constructor() {}

  ngOnInit(): void {}
  public calc(): void {
    this.vat = this.price * 0.17;
  }

  public displayPrice(): void {
    alert(`Price is ${this.price}, VAT is ${this.vat}`);
  }
}
