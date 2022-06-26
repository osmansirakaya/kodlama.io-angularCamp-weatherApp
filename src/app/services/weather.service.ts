import { Weather } from './../models/weather';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }
  getCurrrentWeather(city:string):Observable<Weather>{
  return this.httpClient.get<Weather>("http://api.weatherstack.com/current?access_key=9cee9e9c447fdbe86e034a97bbcae83c&query="+city)
  }
}
