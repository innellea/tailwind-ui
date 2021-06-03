import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor() {}
  public MenuHandler = (flag) => {
    if (flag) {
      document.getElementById('list').classList.add('top-100');
      document.getElementById('list').classList.remove('hidden');
      document.getElementById('close').classList.remove('hidden');
      document.getElementById('open').classList.add('hidden');
    } else {
      document.getElementById('list').classList.remove('top-100');
      document.getElementById('list').classList.add('hidden');
      document.getElementById('close').classList.add('hidden');
      document.getElementById('open').classList.remove('hidden');
    }
  };
  ngOnInit(): void {}
}
