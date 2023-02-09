import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Tour } from 'src/entities/tour';

@Injectable({
  providedIn: 'root'
})
export class ToursService {
  tours: Tour[] = []
  serverUrl = "http://localhost:8080/tours";

  constructor(private http: HttpClient) {
  }

  getTours(): Observable<Tour[]> {
    return of(this.tours);
  }

  getToursFromServer(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.serverUrl);
  }
}
