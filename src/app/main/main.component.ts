import { Component, Input, OnInit } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  @Input() jobList: any; // API object
  location: string;

  constructor(private jobService: JobService) { }

  // function to get data from API Call. It stores in jobList the JSON received from server
  getApi(pag, loc): void{
    this.jobService.getJobs(pag, loc)
    .subscribe(
      data => {
        console.warn(data);
        this.jobList = data;
      }
    );
  }

  setLocation(location: string): void{
    this.location = location;
    this.getApi('0', location);
  }

  setPage(page: string): void{
    this.getApi(page, this.location);
  }

  ngOnInit(): void {
    this.getApi('0', '');
  }

}
