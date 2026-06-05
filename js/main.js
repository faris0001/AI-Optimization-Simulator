document
.getElementById("runBtn")
.addEventListener("click", runSimulation);

function runSimulation() {

    const algorithm =
        document.getElementById("algorithm").value;

    const iterations =
        parseInt(
            document.getElementById("iterations").value
        );

    const population =
        parseInt(
            document.getElementById("population").value
        );

    const mutation =
        parseFloat(
            document.getElementById("mutation").value
        );

    const temperature =
        parseFloat(
            document.getElementById("temperature").value
        );

    const cooling =
        parseFloat(
            document.getElementById("cooling").value
        );

    let result;

    const start =
        performance.now();

    if (algorithm === "hill") {

        result =
            hillClimbing(iterations);

    }

    else if (algorithm === "sa") {

        result =
            simulatedAnnealing(
                temperature,
                cooling,
                0.01
            );

    }

    else if (algorithm === "ga") {

        result =
            geneticAlgorithm(
                population,
                iterations,
                mutation
            );

    }

    const end =
        performance.now();

    document.getElementById("fitness")
        .textContent =
        result.fitness.toFixed(6);

    document.getElementById("bestX")
        .textContent =
        result.x.toFixed(4);

    document.getElementById("bestY")
        .textContent =
        result.y.toFixed(4);

    document.getElementById("executionTime")
        .textContent =
        (end - start).toFixed(2) + " ms";

    drawChart(result.history);
}