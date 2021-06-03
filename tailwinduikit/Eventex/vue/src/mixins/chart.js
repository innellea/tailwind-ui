import Chart from 'chart.js'

export default {
    data() {
        return {
            chartId: "check",
            chartData: {
                type: "line",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                            label: "",
                            borderColor: "#3182CE",
                            data: [0, 200, 300, 200, 500, 500, 600],
                            backgroundColor: "rgb(49,130,206,0.1)",
                            pointBackgroundColor: "#3182CE",
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
                },
            }
        }
    },
    mounted() {
        this.createChart(this.chartId, this.chartData)
    },
    methods: {
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId)
            new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
        },
    }
}