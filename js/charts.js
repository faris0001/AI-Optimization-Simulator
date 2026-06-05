let chartInstance = null;

function drawChart(history) {

    const ctx =
        document
        .getElementById("fitnessChart")
        .getContext("2d");

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {

        type: "line",

        data: {
            labels: history.map(
                (_, index) => index + 1
            ),

            datasets: [
                {
                    label: "Fitness",
                    data: history,
                    borderWidth: 2,
                    tension: 0.2
                }
            ]
        },

        options: {
            responsive: true,

            plugins: {
                legend: {
                    display: true
                }
            },

            scales: {

                x: {
                    title: {
                        display: true,
                        text: "Iteration"
                    }
                },

                y: {
                    title: {
                        display: true,
                        text: "Fitness"
                    }
                }

            }
        }

    });
}