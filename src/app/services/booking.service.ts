import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BookingService{

  constructor(private http: HttpClient) { }
  tempdata: any;
  getdata():any{
    const header = new HttpHeaders();
    header.append('content-type', 'application/json');
    console.log("in get data method");
    return this.http.get("https://clstorageapp.blob.core.windows.net/assignment/booking.json", { headers: header });
   
  }
}
