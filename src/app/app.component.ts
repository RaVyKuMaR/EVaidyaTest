import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingService } from './services/booking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookingService]
})
export class AppComponent implements OnInit{
  title = 'EVaidyaTest';
  booking_data: any = [];
  sourceDetails: any;
  destinationDetails: any;
  vendorDetails: any;
  constructor(private _bookingService: BookingService, private http: HttpClient) {
    
  }

  ngOnInit() {    
    this._bookingService.getdata().subscribe((data: any) => {
      this.booking_data = data
    });
  }

  getDetails() {
    this.sourceDetails = JSON.stringify(this.booking_data.source);
    this.destinationDetails = JSON.stringify(this.booking_data.destination);
    this.vendorDetails = JSON.stringify(this.booking_data.vendor);
  }
  }

