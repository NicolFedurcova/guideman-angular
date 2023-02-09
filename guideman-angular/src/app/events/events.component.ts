import { Component, OnInit } from '@angular/core';
import { Event } from 'src/entities/event';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit  {
  events: Event[] = [];
  selectedEvent: Event | undefined;
  eventsJson: string | undefined;
  comunicationState: boolean | undefined;
  selectedEventRepr: string | undefined;

  constructor(private eventsService: EventsService) {
  }

  ngOnInit() {
    this.updateEvents();
  }

  updateEvents() {
    this.eventsService.getEventsFromServer().subscribe(eventsX => {
      this.events = eventsX;
      this.eventsJson = JSON.stringify(this.events);
      this.comunicationState = true;
    },
      error => {
        console.log("Nastala chyba" + JSON.stringify(error))
        this.comunicationState = false;
      });
  }

  selectEvent(event: Event) {
    this.selectedEventRepr = "id: " + event.id + ", " + event.dateOfTour + ", " + event.duration + ", " + event.price + ", " + event.tourId;
    this.selectedEvent = event;
  }

}
