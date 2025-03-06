
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-schoolproject1',
  templateUrl: './schoolproject1.component.html',
  styleUrls: ['./schoolproject1.component.css']
})
export class SchoolProject1Component {
  public students = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://api.myjson.com/bins/15psn9').subscribe((data: any) => {
      this.students = data;
    });
  }
}