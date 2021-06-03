import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-sales",
    templateUrl: "./sales.component.html",
    styleUrls: ["./sales.component.css"],
})
export class SalesComponent implements OnInit {
    constructor() {}
    popup_calender = (flag) => {
        if (flag) {
            document.getElementById("popup_calender").classList.add("block");
            document.getElementById("popup_calender").classList.remove("hidden");
        } else {
            document.getElementById("popup_calender").classList.add("hidden");
            document.getElementById("popup_calender").classList.remove("block");
        }
    };
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
    Popup2 = (flag) => {
        if (flag) {
            document.getElementById("popup2").classList.add("block");
            document.getElementById("popup2").classList.remove("hidden");
        } else {
            document.getElementById("popup2").classList.add("hidden");
        }
    };
    ngOnInit(): void {}
}
