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
  @Input() value: number;
  @Input() content: string;
  @Input() url: string;
  @Input() id: string;


  constructor() { }

  ngOnInit(): void {
  }

  getLevel(data): number{
    switch (data) {

      case 'entry': {
        return 33;
        break;
      }

      case 'mid': {
        return 66;
        break;
      }

      case 'senior': {
        return 99;
        break;
      }

      default: {
        return 0;
        break;
      }

    }
  }

  Dateparser(date): string{
    const pDate = new Date(date);
    const nDate = new Date(Date.now());
    let diffDate = nDate.getTime() - pDate.getTime();
    diffDate = diffDate / (1000 * 60 * 60);
    if (diffDate >= 24){
      diffDate = diffDate / 24;
      return (diffDate.toFixed(0) + ' days ago');
    }
    else{
      return(diffDate.toFixed(0) + ' hours ago');
    }
  }

}
