import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-calender-day-view",
    templateUrl: "./calender-day-view.component.html",
    styleUrls: ["./calender-day-view.component.css"],
})
export class CalenderDayViewComponent implements OnInit {
    constructor() {}
    Interaction = (flag) => {
        if (flag) {
            document.getElementById("dropdown-content").classList.remove("hidden");
            document.getElementById("dropdownbtn").classList.add("hidden");
            document.getElementById("dropdownbtn2").classList.remove("hidden");
        } else {
            document.getElementById("dropdown-content").classList.add("hidden");
            document.getElementById("dropdownbtn").classList.remove("hidden");
            document.getElementById("dropdownbtn2").classList.add("hidden");
        }
    };
    Popup = (flag) => {
        if (flag) {
            document.getElementById("popup").classList.add("right-100");
            document.getElementById("popup").classList.remove("hidden");
        } else {
            document.getElementById("popup").classList.add("hidden");
        }
    };
    ngOnInit(): void {}
}
