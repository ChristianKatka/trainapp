import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  public url = 'https://rata.digitraffic.fi/api/v1/train-locations/latest/';

  constructor(private http: HttpClient) { }

  getTrains(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}
