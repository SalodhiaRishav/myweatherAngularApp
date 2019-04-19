import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/weather.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-hour-forecast-list',
  templateUrl: './hour-forecast-list.component.html',
  styleUrls: ['./hour-forecast-list.component.css']
})
export class HourForecastListComponent implements OnInit {

  listOfHourForecast : Weather[]=[];

  isCityClicked:boolean=false;

  
  constructor(private weatherService : WeatherService) { }

  

  ngOnInit() {
    // this.weatherService.listFilledEvent.subscribe((data:boolean)=>{
    //   if(data)
    //   {
    //     this.listOfHourForecast=[];
    //     let weatherList:any[]=this.weatherService.fullWeatherList;
        
    //     for(let i=0;i<40;i=i+8)
    //     {
    //       let tempWeatherObject:Weather=new Weather(
    //         new Date(weatherList[i].dt_txt),
    //         "https://openweathermap.org/img/w/"+weatherList[i].weather[0].icon+".png",
    //         weatherList[i].main.temp-273,
    //       weatherList[i].weather[0].description,
    //       weatherList[i].main.pressure,
    //      weatherList[i].main.humidity,
    //      weatherList[i].wind.speed
    //       );
    //       this.listOfHourForecast.push(tempWeatherObject);
        
    //     }
    //     this.isCityClicked=true;
    //   }
    //   else
    //   {
    //     this.isCityClicked=false;
    //   }
    // })


    this.weatherService.weatherItemClicked.subscribe((data)=>{
      if(data){
        this.listOfHourForecast=[];
        let weatherList:any[]=this.weatherService.fullWeatherList;
        for(let i=0;i<=39;++i)
        {
          let tempday=new Date(weatherList[i].dt_txt).getDate();
        
          if(data.dayOfMonth===tempday)
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
                     this.listOfHourForecast.push(tempWeatherObject);
          }
        }
        this.isCityClicked=true;
        console.log(this.listOfHourForecast);
      }
    })
  }
    
  


}
