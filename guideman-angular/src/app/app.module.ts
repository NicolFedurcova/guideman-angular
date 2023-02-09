import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { LocationsComponent } from './locations/locations.component';
import { ToursComponent } from './tours/tours.component';
import { EventsComponent } from './events/events.component';

import { ToursService } from './tours/tours.service';
import { LocationsService } from './locations/locations.service';
import { EventsService } from './events/events.service';
import { UsersService } from './users/users.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersEditComponent,
    LocationsComponent,
    ToursComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService, ToursService, LocationsService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
