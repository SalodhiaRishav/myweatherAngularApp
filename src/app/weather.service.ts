import { Injectable ,EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from './models/weather.model';
import { City } from './models/city.model';
@Injectable()
export class WeatherService {

  cityDetails:City;

  listFilledEvent = new EventEmitter<boolean>();
  weatherItemClicked = new EventEmitter<{dayOfMonth:number}>();

  fullWeatherList:any[];
  constructor(private http: HttpClient) { }

  cityFileUrl = 'assets/city.json';

 getCityDetails() {
  return this.http.get(this.cityFileUrl);
}

// getWeatherDetails(cityid:number)
// {
//   let url:string = 'http://api.openweathermap.org/data/2.5/weather?id='+cityid+'&appid=2d138c464b40a8330b4e7d3616389b11';
//   return this.http.get(url);
// }

getForeCastDetails(cityid:number)
{
  if(cityid===0)
  {
    this.listFilledEvent.emit(false);
  }
  else
  {
    let url:string = 'http://api.openweathermap.org/data/2.5/forecast?id='+cityid+'&appid=2d138c464b40a8330b4e7d3616389b11';
     this.http.get(url).subscribe(
    (weatherDetails:any)=>{
      this.fullWeatherList=weatherDetails.list;
      this.listFilledEvent.emit(true);
    }
  )
  }
  
 
}
}
