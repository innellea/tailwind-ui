import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-simple-text-with-yellow-blob',
    templateUrl: './simple-text-with-yellow-blob.component.html',
    styleUrls: ['./simple-text-with-yellow-blob.component.css'],
})
export class SimpleTextWithYellowBlobComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        // Testimonial carousel
        let slides2 = document.querySelectorAll('.slide-ana2>div');
        let slideSayisi2 = slides2.length;
        let prev2 = document.getElementById('prev2');
        let next2 = document.getElementById('next2');
        for (let index = 0; index < slides2.length; index++) {
            const element: any = slides2[index];
            element.style.transform = 'translateX(' + 100 * index + '%)';
        }
        let loop2 = 0 + 1000 * slideSayisi2;

        function goNext2() {
            loop2++;
            for (let index = 0; index < slides2.length; index++) {
                const element: any = slides2[index];
                element.style.transform = 'translateX(' + 100 * (index - (loop2 % slideSayisi2)) + '%)';
            }
        }

        function goPrev2() {
            loop2--;
            for (let index = 0; index < slides2.length; index++) {
                const element: any = slides2[index];
                element.style.transform = 'translateX(' + 100 * (index - (loop2 % slideSayisi2)) + '%)';
            }
        }

        next2.addEventListener('click', goNext2);
        prev2.addEventListener('click', goPrev2);
    }
}
