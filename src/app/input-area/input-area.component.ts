import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { WeatherService } from '../weather.service';
import { City } from './../models/city.model';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.css']
})
export class InputAreaComponent implements OnInit {
  cityId:number;
  @ViewChild('cityname') cityinput: ElementRef;

  constructor(private weatherService : WeatherService) { }

  getForecastDetails(){  
    let cityName:string=this.cityinput.nativeElement.value;
    this.weatherService.getCityDetails().subscribe((data:Array<City>)=>{
      let found = data.find(function(element) {
       return element.name.toUpperCase()===cityName.toUpperCase();
      });
    
      if(found)
      {
        this.weatherService.cityDetails=found;
        this.cityId=found.id;
        this.weatherService.getForeCastDetails(this.cityId);   
      }
      else
      {
        this.cityId=0;
        this.weatherService.getForeCastDetails(this.cityId); 
       }

})
    
  }

  ngOnInit() {
  }

}
