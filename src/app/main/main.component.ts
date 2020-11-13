import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  jobList;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getJobs()
    .subscribe(
      data => {
        console.warn(data);
        this.jobList = data;
      }
    );
  }

}
