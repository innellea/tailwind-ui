import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-starter';
  menu = document.getElementById('menu');
  cross = document.getElementById('cross');
  constructor() {}

  ngOnInit(): void {
  
  }
}
