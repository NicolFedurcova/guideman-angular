import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Event } from 'src/entities/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events: Event[] = []
  serverUrl = "http://localhost:8080/events";

  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<Event[]> {
    return of(this.events);
  }

  getEventsFromServer(): Observable<Event[]> {
    return this.http.get<Event[]>(this.serverUrl);
  }
}
