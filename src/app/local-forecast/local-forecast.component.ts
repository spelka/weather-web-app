import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather/weather.service'
import { Forecast } from './../Forecast';

@Component({
  selector: 'app-local-forecast',
  templateUrl: './local-forecast.component.html',
  styleUrls: ['./local-forecast.component.css']
})
export class LocalForecastComponent implements OnInit {

  constructor(private weather:WeatherService) { }

  forecast : Forecast;

  monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  ngOnInit()
  {
    console.log("Calling LocalForecastComponent.ngOnInit()")
    this.getForecast();
  }

  getForecast()
  {
    console.log("Calling LocalForecastComponent.getForecast()")
      //subscribe to the incoming observable data and clone fields into the Forecast object
      this.weather.getWeatherData()
      .subscribe((data: any) => this.forecast = {
        //Location
        location: data['timezone'],
        //Current (Day 0) Forecast
        summary: data.currently['summary'],
        date: new Date(data.currently['time'] * 1000).getDate(),
        month: new Date(data.currently['time'] * 1000).getMonth(),
        year: new Date(data.currently['time'] * 1000).getFullYear(),
        icon: data.currently['icon'],
        precipProbability: data.currently['precipProbability'],
        temperature: data.currently['temperature'],
        temperatureHigh: data.currently['temperatureHigh'],
        temperatureLow: data.currently['temperatureLow'],
        humidity: data.currently['humidity']
      })
  }

}
