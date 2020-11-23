import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageEvent: PageEvent;
  value = '';
  @Output() search = new EventEmitter<string>();
  @Output() page = new EventEmitter<string>();

  setLocation(): void{
    this.search.emit(this.value);
    this.value = '';
  }

  setPage(event): void {
    this.page.emit(event.pageIndex.toString());
    console.log(event.pageIndex);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
