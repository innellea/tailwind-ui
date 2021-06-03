import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-calender-week-view",
    templateUrl: "./calender-week-view.component.html",
    styleUrls: ["./calender-week-view.component.css"],
})
export class CalenderWeekViewComponent implements OnInit {
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
    calender_ticket = (flag) => {
        if (flag) {
            document.getElementById("calender_ticket").classList.add("block");
            document.getElementById("calender_ticket").classList.remove("hidden");
        } else {
            document.getElementById("calender_ticket").classList.add("hidden");
            document.getElementById("calender_ticket").classList.remove("block");
        }
    };
    ngOnInit(): void {}
}
