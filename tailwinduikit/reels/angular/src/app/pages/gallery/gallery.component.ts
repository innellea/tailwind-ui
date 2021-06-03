import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  myFlag = true;
  constructor() {}

  ngOnInit(): void {
    // Grids
    <any>$('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer',
        horizontalOrder: true,
      },
    });
  }
  public MenuHandler3 = () => {
    if (this.myFlag) {
      document.getElementById('list2').classList.remove('hidden');
      document.getElementById('close2').classList.remove('hidden');
      document.getElementById('open2').classList.add('hidden');
      this.myFlag = false;
    } else {
      document.getElementById('list2').classList.add('hidden');
      document.getElementById('close2').classList.add('hidden');
      document.getElementById('open2').classList.remove('hidden');
      this.myFlag = true;
    }
  };
}
