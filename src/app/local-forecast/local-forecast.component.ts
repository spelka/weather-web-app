import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather/weather.service'

@Component({
  selector: 'app-local-forecast',
  templateUrl: './local-forecast.component.html',
  styleUrls: ['./local-forecast.component.css']
})
export class LocalForecastComponent implements OnInit {

  constructor(private weather:WeatherService) { }

  forecasts: any;

  ngOnInit() {
  }

  getForecast()
  {
    console.log("Calling LocalForecastComponent.showWeather()")
    this.forecasts = this.weather.getWeather();
    console.log(this.forecasts);
  }

}
