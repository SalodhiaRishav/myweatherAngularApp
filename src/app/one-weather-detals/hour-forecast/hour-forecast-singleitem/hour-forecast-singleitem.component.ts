import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';

@Component({
  selector: 'app-hour-forecast-singleitem',
  templateUrl: './hour-forecast-singleitem.component.html',
  styleUrls: ['./hour-forecast-singleitem.component.css']
})
export class HourForecastSingleitemComponent implements OnInit {


   
  // =new Weather(new Date('2019-04-19'),"50d",30.19,"Haze",1011,35,3.6)

  @Input() weather_item:Weather;

  
  constructor() {
    
   }

  ngOnInit() {
  }

}
