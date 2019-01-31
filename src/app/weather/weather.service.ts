import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConditionalExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  readonly API_KEY = ''
  readonly LAT_LONG = '37.8267,-122.4233'
  readonly ROOT_URL = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast'
  readonly TARGET_URL = this.ROOT_URL + '/' + this.API_KEY + '/' + this.LAT_LONG;

  constructor(private http:HttpClient) { }

  getWeatherData() {
    console.log("Calling WeatherService.getWeather()")
    console.log("Target URL: " + this.TARGET_URL)
    return this.http.get(this.TARGET_URL);
  }
}
