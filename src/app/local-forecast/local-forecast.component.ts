import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather/weather.service'
import { Forecast } from './../Forecast';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-local-forecast',
  templateUrl: './local-forecast.component.html',
  styleUrls: ['./local-forecast.component.css']
})
export class LocalForecastComponent implements OnInit {

  constructor(private weather:WeatherService) { }

  forecast : Forecast;
  weatherData : Observable<Object>;
  
  monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  ngOnInit()
  {
    console.log("Calling LocalForecastComponent.ngOnInit()");
    this.getWeatherData();
    this.getForecast();
  }

  getWeatherData()
  {
    this.weatherData = this.weather.getWeatherData();
  }

  getForecast()
  {
    console.log("Calling LocalForecastComponent.getForecast()");
      //subscribe to the incoming observable data and clone fields into the Forecast object

      

      this.weatherData.subscribe((data: any) => this.forecast = {
        //Current (Today's) Forecast
        location: data['timezone'],
        summary: data.currently['summary'],
        date: new Date(data['currently']['time'] * 1000).getDate(),
        month: new Date(data['currently']['time'] * 1000).getMonth(),
        year: new Date(data['currently']['time'] * 1000).getFullYear(),
        icon: data['currently']['icon'],
        precipProbability: data['currently']['precipProbability'],
        temperature: Math.round(data['currently']['temperature']),
        temperatureHigh: data['currently']['temperatureHigh'],
        temperatureLow: data['currently']['temperatureLow'],
        humidity: data['currently']['humidity'],

        //+1 Day (Tomorrow's) Forecast
        day1_date: new Date(data['daily']['data'][1]['time'] * 1000).getDate(),
        day1_month: new Date(data['daily']['data'][1]['time'] * 1000).getMonth(),
        day1_icon: data['daily']['data'][1]['icon'],
        day1_temperatureHigh: Math.round(data['daily']['data'][1]['temperatureHigh']),
        day1_temperatureLow: Math.round(data['daily']['data'][1]['temperatureLow']),

        //+2 Day Forecast
        day2_date: new Date(data['daily']['data'][2]['time'] * 1000).getDate(),
        day2_month: new Date(data['daily']['data'][2]['time'] * 1000).getMonth(),
        day2_icon: data['daily']['data'][2]['icon'],
        day2_temperatureHigh: Math.round(data['daily']['data'][2]['temperatureHigh']),
        day2_temperatureLow: Math.round(data['daily']['data'][2]['temperatureLow']),

        //+3 Day Forecast
        day3_date: new Date(data['daily']['data'][3]['time'] * 1000).getDate(),
        day3_month: new Date(data['daily']['data'][3]['time'] * 1000).getMonth(),
        day3_icon: data['daily']['data'][3]['icon'],
        day3_temperatureHigh: Math.round(data['daily']['data'][3]['temperatureHigh']),
        day3_temperatureLow: Math.round(data['daily']['data'][3]['temperatureLow']),

        //+4 Day Forecast
        day4_date: new Date(data['daily']['data'][4]['time'] * 1000).getDate(),
        day4_month: new Date(data['daily']['data'][4]['time'] * 1000).getMonth(),
        day4_icon: data['daily']['data'][4]['icon'],
        day4_temperatureHigh: Math.round(data['daily']['data'][4]['temperatureHigh']),
        day4_temperatureLow: Math.round(data['daily']['data'][4]['temperatureLow']),

        //+5 Day Forecast
        day5_date: new Date(data['daily']['data'][5]['time'] * 1000).getDate(),
        day5_month: new Date(data['daily']['data'][5]['time'] * 1000).getMonth(),
        day5_icon: data['daily']['data'][5]['icon'],
        day5_temperatureHigh: Math.round(data['daily']['data'][5]['temperatureHigh']),
        day5_temperatureLow: Math.round(data['daily']['data'][5]['temperatureLow'])
      });
  }

  getWeatherIcon(iconCode: string)
  {
    switch (iconCode)
    {
      case 'clear-day':
        return 'wi wi-day-sunny';
      case 'clear-night':
        return 'wi wi-night-clear';
      case 'rain':
        return 'wi wi-showers';
      case 'snow':
        return 'wi wi-snow';
      case 'sleet':
        return 'wi wi-sleet';
      case 'wind':
        return 'wi wi-strong-wind';
      case 'fog':
        return 'wi wi-fog';
      case 'cloudy':
        return 'wi wi-cloudy';
      case 'hail':
        return 'wi wi-hail';
      case 'thunderstorm':
        return 'wi wi-thunderstorm';
      case 'tornado':
        return 'wi wi-tornado';
      case 'partly-cloudy-day':
        return 'wi wi-day-cloudy';
      case 'partly-cloudy-night':
        return 'wi wi-night-partly-cloudy';
      default:
        return 'wi wi-day-cloudy';
    }
  }
}
