import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../assets/job';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  private url = 'https://www.themuse.com/api/public/jobs';
  private cUrl = 'https://www.themuse.com/api/public/companies/';
  // insert your API key here, leave it blank let you only do 500 calls instead of 3500
  private apiKey = '';


  constructor(private httpClient: HttpClient) { }

  getJobs(pag: string, loc: string): Observable<Job[]> {
    let params1 = new HttpParams().set('category', 'Engineering');
    params1 = params1.append('api_key', this.apiKey);
    params1 = params1.append('page', pag);
    params1 = params1.append('location', loc);


    return this.httpClient.get<Job[]>(this.url, {params: params1});
  }

  getCompany(id: string): Observable<any> {
    const params1 = new HttpParams().set('api_key', this.apiKey);
    return this.httpClient.get<any>(this.cUrl + id, {params: params1});
  }





}
