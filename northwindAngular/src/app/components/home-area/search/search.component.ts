import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    public tooltip = "Search anything published up to " + new Date().toLocaleDateString();

    public textToSearch = "";

    constructor() { }

    ngOnInit(): void {
    }

    public search(args: Event): void {
        console.log(args); // Event object (like SyntheticEvent)
        alert("Searching for " + this.textToSearch);
        this.textToSearch = "";
    }

}
