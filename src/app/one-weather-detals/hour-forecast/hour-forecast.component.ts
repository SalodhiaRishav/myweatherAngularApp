import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
import { City } from 'src/app/models/city.model';

@Component({
  selector: 'app-hour-forecast',
  templateUrl: './hour-forecast.component.html',
  styleUrls: ['./hour-forecast.component.css']
})
export class HourForecastComponent implements OnInit {

  isCityFetched:boolean=false;
  public city:City;

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    this.weatherService.listFilledEvent.subscribe(data=>{

     if(data){
       this.city=this.weatherService.cityDetails;
       this.isCityFetched=true;
       console.log(this.city);
     }else
     {
       this.isCityFetched=false;
     }
    })
  }

}
