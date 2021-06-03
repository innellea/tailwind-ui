import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-inner',
    templateUrl: './search-inner.component.html',
    styleUrls: ['./search-inner.component.css'],
})
export class SearchInnerComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        // slider
        // slider js starts

        let slides = document.querySelectorAll('.slide-ana > div');
        let slideSayisi = slides.length;

        let prev = document.getElementById('prev');
        let next = document.getElementById('next');
        for (let index = 0; index < slides.length; index++) {
            const element: any = slides[index];
            element.style.transform = 'translateX(' + 100 * index + '%)';
        }
        let loop = 0 + 1000 * slideSayisi;

        function goNext() {
            loop++;
            for (let index = 0; index < slides.length; index++) {
                const element: any = slides[index];
                element.style.transform = 'translateX(' + 100 * (index - (loop % slideSayisi)) + '%)';
            }
        }

        function goPrev() {
            loop--;
            for (let index = 0; index < slides.length; index++) {
                const element: any = slides[index];
                element.style.transform = 'translateX(' + 100 * (index - (loop % slideSayisi)) + '%)';
            }
        }

        next.addEventListener('click', goNext);
        prev.addEventListener('click', goPrev);
        document.addEventListener('keydown', function (e) {
            if (e.code === 'ArrowRight') {
                goNext();
            } else if (e.code === 'ArrowLeft') {
                goPrev();
            }
        });
    }
}
