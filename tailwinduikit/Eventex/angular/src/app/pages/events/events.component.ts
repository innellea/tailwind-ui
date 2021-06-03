import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-events",
    templateUrl: "./events.component.html",
    styleUrls: ["./events.component.css"],
})
export class EventsComponent implements OnInit {
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
