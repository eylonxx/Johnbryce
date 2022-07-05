import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
    selector: 'app-discount',
    templateUrl: './discount.component.html',
    styleUrls: ['./discount.component.css'],
    // providers: [ColorsService] // Create ColorsService object only for that component
})
export class DiscountComponent implements OnInit {

    public amount = 10; // Getting amount from server.
    public styling = { backgroundColor: "" };
    public now = new Date();

    // DI List
    constructor(private colorsService: ColorsService) { }

    ngOnInit(): void {
        this.styling.backgroundColor = this.colorsService.getRandomColor();
    }

}
