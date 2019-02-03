import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather/weather.service'
import { Forecast } from './../Forecast';
import { Observable } from 'rxjs';
import { Location } from './../Location'

@Component({
  selector: 'app-local-forecast',
  templateUrl: './local-forecast.component.html',
  styleUrls: ['./local-forecast.component.css']
})
export class LocalForecastComponent implements OnInit {

  constructor(private weather:WeatherService) { }

  forecast : Forecast;
  weatherData : Observable<Object>;
  locationList: Location[];
  
  monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  ngOnInit()
  {
    console.log("Calling LocalForecastComponent.ngOnInit()");
    this.initLocationData();
    this.initDropdownList();
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

  //Initializes a simple list of locations and their associated lat-long coordinates
  initLocationData()
  {
    this.locationList = [
      {
        name: "New York City, America",
        latitude: 40.730610,
        longitude: -73.935242
      } as Location,
      {
        name: "Sydney, Australia",
        latitude: -33.947346,
        longitude: 151.179428
      } as Location,
      {
        name: "São Paulo, Brazil",
        latitude: -23.533773,
        longitude: -46.625290
      } as Location,
      {
        name: "Toronto, Canada",
        latitude: 43.653908,
        longitude: -79.384293
      } as Location,
      {
        name: "Hong Kong, China",
        latitude: 22.308046,
        longitude: 113.918480
      } as Location,
      {
        name: "London, England",
        latitude: 51.509865,
        longitude: -0.118092
      } as Location,
      {
        name: "Frankfurt, Germany",
        latitude: 50.110924,
        longitude: 8.682127
      } as Location,
      {
        name: "Mumbai (Bombay), India",
        latitude: 18.929863,
        longitude: 72.833427
      } as Location,
      {
        name: "Tokyo, Japan",
        latitude: 35.689488,
        longitude: 139.691706
      } as Location,
      {
        name: "Johannesburg, South Africa",
        latitude: -26.195246,
        longitude: 28.034088
      } as Location,
      {
        name: "Madrid, Spain",
        latitude: 40.416775,
        longitude: -3.703790
      } as Location,
      {
        name: "Zurich, Switzerland",
        latitude: 47.451542,
        longitude: 8.564572
      } as Location,
      {
        name: "Taipei City, Taiwan",
        latitude: 25.105497,
        longitude: 121.597366
      } as Location
    ];
  }

  //initializes the select dropdown list
  initDropdownList()
  {
    console.log("calling LocalForecastComponent.initDropDownList()");
    var selectList : HTMLElement = document.getElementById("city-select");

    if (selectList == null)
    {
      console.log("FUC");
    }

    for (var i = 0; i < this.locationList.length; i++)
    {
      var option = document.createElement("option");
      option.value = this.locationList[i].name;
      option.text = this.locationList[i].name;
      selectList.appendChild(option);
    }
  }

  getLatLongString(cityName: string): string
  {
    console.log("calling geocoding.getGetLocationString");
    for (var i = 0; i < this.locationList.length ; i++)
    {
      if (this.locationList[i].name === cityName)
      {
        console.log("geocoding.getGetLocationString returning " + this.locationList[i].latitude + "," + this.locationList[i].longitude);
        return "" + this.locationList[i].latitude + "," + this.locationList[i].longitude;
      }
    }
    return "0,0";
  }
}
