import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
    flag = true;
    constructor() {}
    goToTodos = () => {
        window.location.href = '/project-todos';
    };
    public dropdownFunction(element) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        let list = element.parentElement.parentElement.getElementsByClassName('dropdown-content')[0];
        for (i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.add('hidden');
        }
        list.classList.toggle('hidden');
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
