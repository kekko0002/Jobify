import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.css']
})
export class AnnounceComponent implements OnInit {

  @Input() company: string;
  @Input() title: string;
  @Input() location: string;
  @Input() level: string;
  @Input() date: string;
  @Input() details: string;


  constructor() { }

  ngOnInit(): void {
  }

}
