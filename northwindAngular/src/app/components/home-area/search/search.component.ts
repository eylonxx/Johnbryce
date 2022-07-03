import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public tooltip: string =
    'Search anything up to ' + new Date().toLocaleDateString();

  public textToSearch: string = '';

  constructor() {}

  ngOnInit(): void {}

  public search(): void {
    alert('searching ' + this.textToSearch);
  }
}
