import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cityName: string;

  weathers: Weather[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }
  findCurrentWeather() {
    let temp = [];
    this.weatherService.getCurrrentWeather(this.cityName.toLowerCase()).subscribe((data) => {
        temp.push(data);
      });

    this.weathers = temp;
  }

}
