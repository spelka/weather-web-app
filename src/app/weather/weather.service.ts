import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConditionalExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  readonly API_KEY = '';
  readonly ROOT_URL = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast';

  constructor(private http:HttpClient) { }

  getWeatherData(newLatLong:string) {
    console.log("Calling WeatherService.getWeather()");
    
    var TARGET_URL : string = this.ROOT_URL + '/' + this.API_KEY + '/' + newLatLong;
    console.log("Target URL: " + TARGET_URL);
    return this.http.get(TARGET_URL);
  }
}
