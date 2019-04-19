import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-day-weather-one-item',
  templateUrl: './day-weather-one-item.component.html',
  styleUrls: ['./day-weather-one-item.component.css']
})
export class DayWeatherOneItemComponent implements OnInit {
   dates:string;
   
  // =new Weather(new Date('2019-04-19'),"50d",30.19,"Haze",1011,35,3.6)

  @Input() weather_item:Weather;

  
  constructor(private weatherService:WeatherService) {
    
   }

   showHourWeatherDetails()
   {
    this.weatherService.weatherItemClicked.emit({dayOfMonth:this.weather_item.date.getDate()})
   }

  ngOnInit() {
    this.dates=this.weather_item.date.toDateString();
  }

}
