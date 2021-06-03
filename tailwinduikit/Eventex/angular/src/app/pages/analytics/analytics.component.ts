import { Component, OnInit } from "@angular/core";
declare var Chart;
@Component({
    selector: "app-analytics",
    templateUrl: "./analytics.component.html",
    styleUrls: ["./analytics.component.css"],
})
export class AnalyticsComponent implements OnInit {
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
    ngOnInit(): void {
        const chart = new Chart(document.getElementById("myChart"), {
            type: "line",
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "Aug", "Sep", "Nov", "Dec"],
                datasets: [
                    {
                        label: "16 Mar 2018",
                        borderColor: "#4A5568",
                        data: [600, 400, 620, 300, 200, 600, 230, 300, 200, 200, 100, 1200],
                        fill: false,
                        pointBackgroundColor: "#4A5568",
                        borderWidth: "3",
                        pointBorderWidth: "4",
                        pointHoverRadius: "6",
                        pointHoverBorderWidth: "8",
                        pointHoverBorderColor: "rgb(74,85,104,0.2)",
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
                },
            },
        });
        const myBarChart = new Chart(document.getElementById("chartjs1"), {
            type: "bar",
            data: { labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], datasets: [{ data: [25, 55, 100, 75, 60, 60, 120, 150, 40, 0], fill: false, backgroundColor: "rgba(246,173,85,1)" }] },
            options: {
                /*  scales: { yAxes: [{ ticks: { beginAtZero: true } }] }, */
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                },

                legend: {
                    position: false,
                },
            },
        });
        const myBarChart2 = new Chart(document.getElementById("chartjs2"), {
            type: "pie",
            data: { labels: ["Accepted", "Rejected", "Pending", "Approved"], datasets: [{ data: [60, 12, 12, 25], fill: false, backgroundColor: ["#4880FF", "#FF5660", "#FFC400", "#24CCB8"] }] },
            options: {
                legend: {
                    position: false,
                },
            },
        });
    }
}
