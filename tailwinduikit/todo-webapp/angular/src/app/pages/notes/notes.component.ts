import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
})
export class NotesComponent implements OnInit {
    constructor() {}
    public Popup(flag) {
        if (flag) {
            document.getElementById('popup').classList.add('right-100');
            document.getElementById('popup').classList.remove('hidden');
        } else {
            document.getElementById('popup').classList.add('hidden');
        }
    }
    public Popup_review(flag) {
        if (flag) {
            document.getElementById('popup').classList.add('hidden');
            document.getElementById('popup_review').classList.remove('hidden');
        } else {
            document.getElementById('popup_review').classList.add('hidden');
        }
    }
    ngOnInit(): void {}
}
