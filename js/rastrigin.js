function rastrigin(x, y) {

    return 20
        + (x * x)
        + (y * y)
        - 10 * (
            Math.cos(2 * Math.PI * x)
            + Math.cos(2 * Math.PI * y)
        );
}