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
    this.getWeatherForecast();
  }

  setWeatherData(latlong:string)
  {
    console.log("Calling LocalForecastComponent.setWeatherData()");
    this.weatherData = this.weather.getWeatherData(latlong);
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
        temperature: Math.round(this.getCelsiusTemperature(data['currently']['temperature'])),
        temperatureHigh: data['currently']['temperatureHigh'],
        temperatureLow: data['currently']['temperatureLow'],
        humidity: data['currently']['humidity'],

        //+1 Day (Tomorrow's) Forecast
        day1_date: new Date(data['daily']['data'][1]['time'] * 1000).getDate(),
        day1_month: new Date(data['daily']['data'][1]['time'] * 1000).getMonth(),
        day1_icon: data['daily']['data'][1]['icon'],
        day1_temperatureHigh: Math.round(this.getCelsiusTemperature(data['daily']['data'][1]['temperatureHigh'])),
        day1_temperatureLow: Math.round(this.getCelsiusTemperature(data['daily']['data'][1]['temperatureLow'])),

        //+2 Day Forecast
        day2_date: new Date(data['daily']['data'][2]['time'] * 1000).getDate(),
        day2_month: new Date(data['daily']['data'][2]['time'] * 1000).getMonth(),
        day2_icon: data['daily']['data'][2]['icon'],
        day2_temperatureHigh: Math.round(this.getCelsiusTemperature(data['daily']['data'][2]['temperatureHigh'])),
        day2_temperatureLow: Math.round(this.getCelsiusTemperature(data['daily']['data'][2]['temperatureLow'])),

        //+3 Day Forecast
        day3_date: new Date(data['daily']['data'][3]['time'] * 1000).getDate(),
        day3_month: new Date(data['daily']['data'][3]['time'] * 1000).getMonth(),
        day3_icon: data['daily']['data'][3]['icon'],
        day3_temperatureHigh: Math.round(this.getCelsiusTemperature(data['daily']['data'][3]['temperatureHigh'])),
        day3_temperatureLow: Math.round(this.getCelsiusTemperature(data['daily']['data'][3]['temperatureLow'])),

        //+4 Day Forecast
        day4_date: new Date(data['daily']['data'][4]['time'] * 1000).getDate(),
        day4_month: new Date(data['daily']['data'][4]['time'] * 1000).getMonth(),
        day4_icon: data['daily']['data'][4]['icon'],
        day4_temperatureHigh: Math.round(this.getCelsiusTemperature(data['daily']['data'][4]['temperatureHigh'])),
        day4_temperatureLow: Math.round(this.getCelsiusTemperature(data['daily']['data'][4]['temperatureLow'])),

        //+5 Day Forecast
        day5_date: new Date(data['daily']['data'][5]['time'] * 1000).getDate(),
        day5_month: new Date(data['daily']['data'][5]['time'] * 1000).getMonth(),
        day5_icon: data['daily']['data'][5]['icon'],
        day5_temperatureHigh: Math.round(this.getCelsiusTemperature(data['daily']['data'][5]['temperatureHigh'])),
        day5_temperatureLow: Math.round(this.getCelsiusTemperature(data['daily']['data'][5]['temperatureLow']))
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
    console.log("calling LocalForecastComponent.initLocationData()");
    this.locationList = [
      {
        name: "Calgary, Alberta",
        latitude: 51.048615,
        longitude: -114.070847
      } as Location,
      {
        name: "Edmonton, Alberta",
        latitude: 53.544449,
        longitude: -113.490913
      } as Location,
      {
        name: "Halifax, Nova Scotia",
        latitude: 44.648766,
        longitude: -63.575237
      } as Location,
      {
        name: "Montréal, Quebec",
        latitude: 45.501690,
        longitude: -73.567253
      } as Location,
      {
        name: "Ottawa, Ontario",
        latitude: 51.509865,
        longitude: -0.118092
      } as Location,
      {
        name: "Québec City, Quebec",
        latitude: 46.813877,
        longitude: -71.207977
      } as Location,
      {
        name: "Regina, Saskatchewan",
        latitude: 50.448761,
        longitude: -104.617310
      } as Location,
      {
        name: "Saskatoon, Saskatchewan",
        latitude: 52.133213,
        longitude: -106.670044
      } as Location,
      {
        name: "Toronto, Ontario",
        latitude: 43.653908,
        longitude: -79.384293
      } as Location,
      {
        name: "Vancouver, British Columbia",
        latitude: 49.263569,
        longitude: -123.138573
      } as Location,

      {
        name: "Victoria, British Columbia",
        latitude: 48.428421,
        longitude: -123.365646
      } as Location,
      {
        name: "Whitehorse, Yukon",
        latitude: 60.721188,
        longitude: -135.056839
      } as Location,
      {
        name: "Winnipeg, Manitoba",
        latitude: 49.895138,
        longitude: -97.138374
      } as Location,
      {
        name: "Yellowknife, Northwest",
        latitude: 60.721188,
        longitude: -135.056839
      } as Location
    ];
  }

  //initializes the select dropdown list
  initDropdownList()
  {
    console.log("calling LocalForecastComponent.initDropDownList()");
    var selectList : HTMLElement = document.getElementById("city-select");

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
    console.log("calling LocalForecastComponent.getGetLocationString");
    for (var i = 0; i < this.locationList.length ; i++)
    {
      if (this.locationList[i].name === cityName)
      {
        console.log("LocalForecastComponent.getGetLocationString returning " + this.locationList[i].latitude + "," + this.locationList[i].longitude);
        return "" + this.locationList[i].latitude + "," + this.locationList[i].longitude;
      }
    }
    return "0,0";
  }

    //get the weather forecast for the city selected in the dropdown menu
    getWeatherForecast()
    {
      console.log("calling LocalForecastComponent.getWeatherForecast()");
      //Get the value from the selected Element
      //Note: Have to cast TypeScript HTMLElements to HTMLInputElements in order to access their value
      var location = <HTMLInputElement>document.getElementById("city-select");
      console.log("LOG: " + location.value);
  
      //make the HTTP request for the selected city and store the response in the component
      this.setWeatherData(this.getLatLongString(location.value));

      //update the display with the forecast data
      this.getForecast();
    }

    getCelsiusTemperature(farenheit: number)
    {
      return (farenheit - 32) * (5/9);
    }
}
