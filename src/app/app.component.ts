import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'webapp';
  showRoutes = [];
  routes = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    console.log('hi');
    this.http.get('http://localhost:3001/routesInfo').subscribe((res: any) => {
      this.showRoutes = res.routes;
      this.routes = res.routes;
      console.log(res);
    });
  }

  clciked(i) {
    if (i === -1) {
      this.routes = [...this.showRoutes];
      return;
    }
    this.routes = [...this.showRoutes];
    this.routes = this.routes.slice(i, i + 1);
  }
}
