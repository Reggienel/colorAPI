import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  private apiUrl = 'https://api.prolook.com/api/colors/prolook';
  constructor(private http: HttpClient) {}

  getColors(): Observable<any> {
    //Get the API Data
    return this.http.get(this.apiUrl);
  }
}
