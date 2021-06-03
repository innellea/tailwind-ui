import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  sideBar: any;

  constructor() {}

  ngOnInit(): void {
    this.sideBar = document.getElementById('mobile-nav');
  }
  public sidebarHandler = (check) => {
    if (check) {
      this.sideBar.style.transform = 'translateX(-0px)';
    } else {
      this.sideBar.style.transform = 'translateX(-500px)';
    }
  };
}
