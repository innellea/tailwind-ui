import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-large-typography-with-gradient-and-glass-effect',
    templateUrl: './large-typography-with-gradient-and-glass-effect.component.html',
    styleUrls: ['./large-typography-with-gradient-and-glass-effect.component.css'],
})
export class LargeTypographyWithGradientAndGlassEffectComponent implements OnInit {
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
