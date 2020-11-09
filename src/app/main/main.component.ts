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

  getJobs(): void{
    this.jobList = this.jobService.getJobs();
  }

  ngOnInit(): void {
  }

}
