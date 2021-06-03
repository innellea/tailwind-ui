import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
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
