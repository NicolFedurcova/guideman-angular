import { Component, OnInit } from '@angular/core';
import { Location } from 'src/entities/location';
import { LocationsService } from './locations.service';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})

export class LocationsComponent implements OnInit  {
  locations: Location[] = [];
  selectedLocation: Location | undefined;
  selectedLocationRepr: string ="";
  locationsJson: string | undefined;
  comunicationState: boolean | undefined;

  constructor(private locationsService: LocationsService) {
  }

  ngOnInit() {
    this.updateLocations();
  }

  updateLocations() {
    this.locationsService.getLocationsFromServer().subscribe(locationsX => {
      this.locations = locationsX;
      this.locationsJson = JSON.stringify(this.locations);
      this.comunicationState = true;
    },
      error => {
        console.log("Nastala chyba" + JSON.stringify(error))
        this.comunicationState = false;
      });
  }

  selectLocation(location: Location) {
    this.selectedLocationRepr = "id: " + location.id + ", " + location.country + ", " + location.city + ", " + location.street + ", " + location.street_number;
    this.selectedLocation = location;
  }

}
