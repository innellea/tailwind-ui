import React, { useEffect } from "react";
import Head from "next/head";
export default function IndexPage() {
    useEffect(() => {
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
    });
    return (
        <>
            <Head>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
            </Head>
            <div>
                <div className="flex w-full justify-between items-center mt-9">
                    <p className="text-lg leading-none text-right text-gray-800">Tickets sold</p>
                    <div className="relative bg-gray-100 ease-in duration-150 hover:bg-gray-200 pb-2 pt-1 px-3 rounded-sm">
                        <select className="text-xs text-gray-600 w-24 h-full bg-transparent focus:outline-none">
                            <option className="leading-none">Weekly</option>
                            <option className="leading-none">Monthly</option>
                            <option className="leading-none">Daily</option>
                        </select>
                    </div>
                </div>
                <div className="mt-5 w-full">
                    <canvas id="check" />
                </div>
            </div>
        </>
    );
}
