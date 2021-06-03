import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-notebook',
    templateUrl: './notebook.component.html',
})
export class NotebookComponent implements OnInit {
    flag = true;
    constructor() {}
    public dropdownFunction(element) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        let list = element.parentElement.parentElement.getElementsByClassName('dropdown-content')[0];
        for (i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.add('hidden');
        }
        list.classList.toggle('hidden');
    }
    goToNotes = () => {
        window.location.href = '/notes';
    };
    public selection(flag) {
        console.log('flag is here', flag);
        if (flag) {
            document.getElementById('check').classList.add('md:flex');
            document.getElementById('check').classList.remove('hidden');
        } else {
            document.getElementById('check').classList.remove('md:flex');
            document.getElementById('check').classList.add('hidden');
        }
    }
    public checkAll() {
        if (this.flag) {
            document.querySelectorAll('input[type="checkbox"]').forEach((el) => {
                el.nextElementSibling.classList.remove('hidden');
            });
            this.flag = false;
        } else {
            document.querySelectorAll('input[type="checkbox"]').forEach((el) => {
                el.nextElementSibling.classList.add('hidden');
            });
            this.flag = true;
        }
    }
    ngOnInit(): void {}
}
