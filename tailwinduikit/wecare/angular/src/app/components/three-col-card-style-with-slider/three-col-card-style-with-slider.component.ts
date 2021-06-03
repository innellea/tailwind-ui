import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-three-col-card-style-with-slider',
    templateUrl: './three-col-card-style-with-slider.component.html',
    styleUrls: ['./three-col-card-style-with-slider.component.css'],
})
export class ThreeColCardStyleWithSliderComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        // Health tips carousel mobile
        let slides = document.querySelectorAll('.slide-ana>div');
        let slideSayisi = slides.length;
        let current = 1;
        let currentSlide = document.getElementById('current');
        let prev = document.getElementById('prev');
        let next = document.getElementById('next');
        for (let index = 0; index < slides.length; index++) {
            const element: any = slides[index];
            element.style.transform = 'translateX(' + 100 * index + '%)';
        }
        let loop = 0 + 1000 * slideSayisi;

        function goNext() {
            if (current < slideSayisi) {
                current = current + 1;
            } else {
                current = 1;
            }
            currentSlide.innerHTML = '0' + current;
            loop++;
            for (let index = 0; index < slides.length; index++) {
                const element: any = slides[index];
                element.style.transform = 'translateX(' + 100 * (index - (loop % slideSayisi)) + '%)';
            }
        }

        function goPrev() {
            if (current > 1) {
                current = current - 1;
            } else {
                current = slideSayisi;
            }
            currentSlide.innerHTML = '0' + current;
            loop--;
            for (let index = 0; index < slides.length; index++) {
                const element: any = slides[index];
                element.style.transform = 'translateX(' + 100 * (index - (loop % slideSayisi)) + '%)';
            }
        }

        next.addEventListener('click', goNext);
        prev.addEventListener('click', goPrev);
        let slides3 = document.querySelectorAll('.slide-ana3>div');
        let slideSayisi3 = slides3.length;
        let current3 = 1;
        let currentSlide3 = document.getElementById('current3');
        let prev3 = document.getElementById('prev3');
        let next3 = document.getElementById('next3');
        for (let index = 0; index < slides3.length; index++) {
            const element: any = slides3[index];
            element.style.transform = 'translateX(' + 100 * index + '%)';
        }
        let loop3 = 0 + 1000 * slideSayisi3;

        function goNext3() {
            if (current3 < slideSayisi3) {
                current3 = current3 + 1;
            } else {
                current3 = 1;
            }
            currentSlide3.innerHTML = '0' + current3;
            loop3++;
            for (let index = 0; index < slides3.length; index++) {
                const element: any = slides3[index];
                element.style.transform = 'translateX(' + 100 * (index - (loop3 % slideSayisi3)) + '%)';
            }
        }

        function goPrev3() {
            if (current3 > 1) {
                current3 = current3 - 1;
            } else {
                current3 = slideSayisi3;
            }
            currentSlide3.innerHTML = '0' + current3;
            loop3--;
            for (let index = 0; index < slides3.length; index++) {
                const element: any = slides3[index];
                element.style.transform = 'translateX(' + 100 * (index - (loop3 % slideSayisi3)) + '%)';
            }
        }

        next3.addEventListener('click', goNext3);
        prev3.addEventListener('click', goPrev3);
    }
}
