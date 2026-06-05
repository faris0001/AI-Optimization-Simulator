function hillClimbing(maxIter = 100) {

    let x = Math.random() * 10 - 5;
    let y = Math.random() * 10 - 5;

    let history = [];

    for(let i = 0; i < maxIter; i++){

        let current = rastrigin(x,y);

        history.push(current);

        let nx = x + (Math.random()-0.5);
        let ny = y + (Math.random()-0.5);

        let next = rastrigin(nx,ny);

        if(next < current){
            x = nx;
            y = ny;
        }
    }

    return {
        x,y,
        fitness: rastrigin(x,y),
        history
    };
}