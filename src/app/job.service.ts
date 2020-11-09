import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  private url = 'https://www.themuse.com/api/public/jobs?category=Engineering&page=1';


  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line: typedef
  getJobs(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  // tslint:disable-next-line: typedef
  diagn() {}
}
