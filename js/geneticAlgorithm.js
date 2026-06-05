function randomGene() {
    return Math.random() * 10 - 5;
}

function createIndividual() {
    return {
        x: randomGene(),
        y: randomGene()
    };
}

function fitness(individual) {
    return rastrigin(individual.x, individual.y);
}

function tournamentSelection(population, size = 3) {

    let best = null;

    for (let i = 0; i < size; i++) {

        const candidate =
            population[
                Math.floor(Math.random() * population.length)
            ];

        if (
            best === null ||
            fitness(candidate) < fitness(best)
        ) {
            best = candidate;
        }
    }

    return best;
}

function crossover(parent1, parent2) {

    return {
        x: (parent1.x + parent2.x) / 2,
        y: (parent1.y + parent2.y) / 2
    };
}

function mutate(individual, mutationRate) {

    let child = { ...individual };

    if (Math.random() < mutationRate) {
        child.x += (Math.random() - 0.5);
    }

    if (Math.random() < mutationRate) {
        child.y += (Math.random() - 0.5);
    }

    return child;
}

function geneticAlgorithm(
    populationSize = 50,
    generations = 100,
    mutationRate = 0.05
) {

    let population = [];

    let history = [];

    for (let i = 0; i < populationSize; i++) {
        population.push(createIndividual());
    }

    let bestSolution = null;

    for (let gen = 0; gen < generations; gen++) {

        population.sort(
            (a, b) => fitness(a) - fitness(b)
        );

        bestSolution = population[0];

        history.push(
            fitness(bestSolution)
        );

        let newPopulation = [];

        // ELITISM
        newPopulation.push(bestSolution);

        while (
            newPopulation.length <
            populationSize
        ) {

            const parent1 =
                tournamentSelection(population);

            const parent2 =
                tournamentSelection(population);

            let child =
                crossover(parent1, parent2);

            child =
                mutate(
                    child,
                    mutationRate
                );

            newPopulation.push(child);
        }

        population = newPopulation;
    }

    return {
        x: bestSolution.x,
        y: bestSolution.y,
        fitness: fitness(bestSolution),
        history
    };
}