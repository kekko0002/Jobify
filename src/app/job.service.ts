import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../assets/job';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  private url = 'https://www.themuse.com/api/public/jobs';


  constructor(private httpClient: HttpClient) { }

  getJobs(): Observable<Job[]> {
    let params1 = new HttpParams().set('category', 'Engineering');
    params1 = params1.append('page', '0');

    return this.httpClient.get<Job[]>(this.url, {params: params1});

  }

}
