import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/entities/tour';
import { ToursService } from './tours.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  tours: Tour[] = [];
  selectedTour: Tour | undefined;
  toursJson: string | undefined;
  comunicationState: boolean | undefined;
  selectedTourRepr: string | undefined;

  constructor(private toursService: ToursService) {
  }

  ngOnInit() {
    this.updateTours();
  }

  updateTours() {
    this.toursService.getToursFromServer().subscribe(toursX => {
      this.tours = toursX;
      this.toursJson = JSON.stringify(this.tours);
      this.comunicationState = true;
    },
      error => {
        console.log("Nastala chyba" + JSON.stringify(error))
        this.comunicationState = false;
      });
  }

  selectTour(tour: Tour) {
    this.selectedTourRepr = "id: "+ tour.id + ", " + tour.title + ", " + tour.bio;
    this.selectedTour = tour;
  }


}
