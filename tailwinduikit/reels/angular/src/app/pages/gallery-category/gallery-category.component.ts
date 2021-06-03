import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-category',
  templateUrl: './gallery-category.component.html',
  styleUrls: ['./gallery-category.component.css'],
})
export class GalleryCategoryComponent {
  myFlag = true;
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
