import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { JobService } from '../job.service'; // import the service for company infos

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {

  @Input() content: string;
  @Input() url: string;
  @Input() company: string;
  @Input() id: string;
  info;
  parsed;

  constructor(private jobService: JobService) { }

  htmlParser(stringHtml): object{  // parse the text given by API into a DOM element
    const p = new DOMParser().parseFromString(stringHtml, 'text/html');
    return p.body;
  }

  addClasses(html): void{  // Add classes for the HTML given by the API for the job description
    const paras = html.getElementsByTagName('p');
    const lists = html.getElementsByTagName('li');
    const links = html.getElementsByTagName('a');
    const unList = html.getElementsByTagName('ul');

    for (const p of paras) {
      p.classList.add('noP');
    }

    for (const li of lists) {
      li.classList.add('noLi');
    }

    for (const a of links) {
      a.classList.add('noA');
    }

    for (const ul of unList) {
      ul.classList.add('noUl');
    }
  }

  // function to get company data from API Call
  getApiLoc(id): void{
    this.jobService.getCompany(id)
    .subscribe(
      data => {
        this.info = data;
      }
    );
  }

  ngOnInit(): void {
    this.parsed = this.htmlParser(this.content);
    this.addClasses(this.parsed);
    this.getApiLoc(this.id);
  }

}
