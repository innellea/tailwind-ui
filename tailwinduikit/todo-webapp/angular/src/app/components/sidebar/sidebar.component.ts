import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
    active: string = '';
    constructor(private router: Router) {
        this.active = router.url;
    }
    public openSidebar = (flag) => {
        let sidebar = document.getElementById('sidebar');
        flag ? sidebar.classList.add('hidden') : sidebar.classList.remove('hidden');
    };
    ngOnInit(): void {}
}
