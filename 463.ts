// idea: we have to find the parameters of the island.
  // loop through the matrix.
        // if we hit 1, we look left, top, right, bottom
        // if its water, increment count
function islandPerimeter(grid: number[][]): number {
    let count = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                if (!grid[i][j - 1]) count++;
                if (!grid[i - 1] || !grid[i - 1][j]) count++;
                if (!grid[i][j + 1]) count++;
                if (!grid[i + 1] || !grid[i + 1][j]) count++;
            }
        }
    }
    return count;
};