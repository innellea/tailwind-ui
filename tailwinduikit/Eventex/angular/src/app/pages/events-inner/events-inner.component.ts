import { Component, OnInit } from "@angular/core";
declare var Chart;
@Component({
    selector: "app-events-inner",
    templateUrl: "./events-inner.component.html",
    styleUrls: ["./events-inner.component.css"],
})
export class EventsInnerComponent implements OnInit {
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
    dropdownFunction = (element) => {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        let list = element.parentElement.parentElement.getElementsByClassName("dropdown-content")[0];
        for (i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.add("hidden");
        }
        list.classList.toggle("hidden");
    };

    ngOnInit(): void {
        const check = new Chart(document.getElementById("check"), {
            type: "line",
            data: {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                    {
                        label: "",
                        borderColor: "#3182CE",
                        data: [200, 400, 300, 500, 400, 500, 600, 0],
                        backgroundColor: "rgb(49,130,206,0.1)",
                        pointBackgroundColor: "#3182CE",
                        borderWidth: "3",
                        pointBorderWidth: "4",
                        pointHoverRadius: "6",
                        pointHoverBorderWidth: "8",
                        pointHoverBorderColor: "rgb(49,130,206,0.1)",
                    },
                ],
            },
            options: {
                legend: {
                    position: false,
                },
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            display: false,
                        },
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            display: false,
                        },
                    ],
                },
            },
        });
        window.onclick = function (event) {
            if (!event.target.matches(".dropbtn")) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    openDropdown.classList.add("hidden");
                }
            }
        };
    }
}
