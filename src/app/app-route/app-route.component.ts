import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-route',
  templateUrl: './app-route.component.html',
  styleUrls: ['./app-route.component.css'],
})
export class AppRouteComponent implements OnInit {
  @Input() route;
  routeData = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(`http://localhost:3001${this.route}/info`)
      .subscribe((data: any) => {
        console.log('inside app-route', data.response);
        this.routeData = data.response;
      });
  }
  purchase() {
    this.http
      .get(`http://localhost:3001${this.route}/purchase`)
      .subscribe((res: any) => {
        console.log(res);
        alert(`Your API key is ${res.key}`);
      });
  }
}
