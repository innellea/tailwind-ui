import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
    active;
    url;
    constructor(private router: Router) {
        this.url = router.url;
    }

    openSidebarMob = (flag) => {
        let sidebar = document.getElementById("sidebarMob");
        if (flag) {
            sidebar.classList.add("hidden");
        } else {
            sidebar.classList.remove("hidden");
        }
    };
    openSidebar = (flag) => {
        let sidebar = document.getElementById("sidebar");
        if (flag) {
            sidebar.classList.add("hidden");
        } else {
            sidebar.classList.remove("hidden");
        }
    };
    ngOnInit(): void {
        if (this.url.indexOf("sales") !== -1) {
            this.active = "sales";
        } else if (this.url.indexOf("calender") !== -1) {
            this.active = "calendar";
        } else if (this.url.indexOf("analytics") !== -1) {
            this.active = "analytics";
        } else {
            this.active = "events";
        }
    }
}
