import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-vertical-cards-with-gradient-head',
    templateUrl: './vertical-cards-with-gradient-head.component.html',
    styleUrls: ['./vertical-cards-with-gradient-head.component.css'],
})
export class VerticalCardsWithGradientHeadComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        let elements = document.querySelectorAll('[data-menu]');
        for (let i = 0; i < elements.length; i++) {
            let main = elements[i];
            main.addEventListener('click', function () {
                let list = document.getElementById('listHolder');
                let open = document.getElementById('andicators');
                let close = document.getElementById('andicators1');
                list.classList.toggle('hidden');
                if (list.classList.value.indexOf('hidden') === -1) {
                    open.classList.add('hidden');
                    close.classList.remove('hidden');
                } else {
                    open.classList.remove('hidden');
                    close.classList.add('hidden');
                }
            });
        }
    }
}
