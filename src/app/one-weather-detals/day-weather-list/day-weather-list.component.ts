import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-day-weather-list',
  templateUrl: './day-weather-list.component.html',
  styleUrls: ['./day-weather-list.component.css']
})
export class DayWeatherListComponent implements OnInit {

  listOfFiveDayWeather : Weather[]=[];

  isCityFound:boolean=false;

  
  constructor(private weatherService : WeatherService) { }

  

  ngOnInit() {
    this.weatherService.listFilledEvent.subscribe((data:boolean)=>{
      if(data)
      {
        this.listOfFiveDayWeather=[];
        let weatherList:any[]=this.weatherService.fullWeatherList;
        for(let i=0;i<40;i=i+8)
        {
          let tempWeatherObject:Weather=new Weather(
            new Date(weatherList[i].dt_txt),
            "https://openweathermap.org/img/w/"+weatherList[i].weather[0].icon+".png",
            weatherList[i].main.temp-273,
          weatherList[i].weather[0].description,
          weatherList[i].main.pressure,
         weatherList[i].main.humidity,
         weatherList[i].wind.speed
          );
          this.listOfFiveDayWeather.push(tempWeatherObject);
        
        }
        this.isCityFound=true;
      }
      else
      {
        this.isCityFound=false;
      }
    })
  }
    
  

}
