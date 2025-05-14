export const calculatePaths = () => {
    const paths: number[][] = [];

    // Horizontal paths
    for (let row = 0; row < 5; row++) {
        paths.push(Array.from({ length: 5 }, (_, i) => row * 5 + i));
    }

    // Vertical paths
    for (let col = 0; col < 5; col++) {
        paths.push(Array.from({ length: 5 }, (_, i) => col + i * 5));
    }

    // Diagonal paths
    paths.push([0, 6, 12, 18, 24]);
    paths.push([4, 8, 12, 16, 20]);

    return paths;
}