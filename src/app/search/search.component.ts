import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue:string='';
  constructor() { }

  ngOnInit(): void {
  }

  changeSearchValue($event: Event) {
 this.searchValue = ((<HTMLInputElement>$event.target).value);
  }
}
