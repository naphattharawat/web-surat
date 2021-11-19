import { HomeService } from './service/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data1: any;
  data2: any;
  options = {
    responsive: true,
    maintainAspectRatio: false
  };
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getChartOne();
    this.getChartTwo();

  }

  getChartOne() {
    this.data1 = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
  }
  getChartTwo() {
    this.data2 = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
  }
}
