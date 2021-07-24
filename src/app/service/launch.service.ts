import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  baseURL = 'https://api.spaceXdata.com/v3/launches?limit=100';

  constructor(private httpClient: HttpClient) { }

  getLaunchPrograms(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }

  getFilteredLaunchPrograms(filter) {
    return this.httpClient.get(`${this.baseURL}&launch_success=${filter.launchFilter}&land_success=${filter.landingFilter}&launch_year=${filter.year}`);
  }

}
