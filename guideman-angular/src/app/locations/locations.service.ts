import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Location } from 'src/entities/location';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  locations: Location[] = []
  serverUrl = "http://localhost:8080/locations";

  constructor(private http: HttpClient) {
  }

  getLocations(): Observable<Location[]> {
    return of(this.locations);
  }

  getLocationsFromServer(): Observable<Location[]> {
    return this.http.get<Location[]>(this.serverUrl);
  }
}
