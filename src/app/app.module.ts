import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { InputAreaComponent } from './input-area/input-area.component';
import { OneWeatherDetalsComponent } from './one-weather-detals/one-weather-detals.component';
import { HourForecastComponent } from './one-weather-detals/hour-forecast/hour-forecast.component';
import { DayWeatherListComponent } from './one-weather-detals/day-weather-list/day-weather-list.component';
import { DayWeatherOneItemComponent } from './one-weather-detals/day-weather-one-item/day-weather-one-item.component';
import { HourForecastListComponent } from './one-weather-detals/hour-forecast/hour-forecast-list/hour-forecast-list.component';
import { HourForecastSingleitemComponent } from './one-weather-detals/hour-forecast/hour-forecast-singleitem/hour-forecast-singleitem.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputAreaComponent,
    OneWeatherDetalsComponent,
    HourForecastComponent,
    DayWeatherListComponent,
    DayWeatherOneItemComponent,
    HourForecastListComponent,
    HourForecastSingleitemComponent,
 
     ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
