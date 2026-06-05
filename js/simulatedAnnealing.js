function simulatedAnnealing(
    T = 100,
    cooling = 0.95,
    Tmin = 0.01
){
    let x = Math.random()*10 -5;
    let y = Math.random()*10 -5;

    let history = [];

    while(T > Tmin){

        let nx = x + (Math.random()-0.5);
        let ny = y + (Math.random()-0.5);

        let current = rastrigin(x,y);
        let next = rastrigin(nx,ny);

        let delta = next-current;

        if(delta < 0 ||
          Math.random() <
          Math.exp(-delta/T)){

            x = nx;
            y = ny;
        }

        history.push(rastrigin(x,y));

        T *= cooling;
    }

    return {
        x,y,
        fitness: rastrigin(x,y),
        history
    };
}