
/**
 * Author: Braeden Diaz
 * 
 * A class that represents a problem definition for a GridWorld problem.
 * 
 * A GridWorld problem is a problem defined by a grid of spaces where each space
 * on the grid can be represented with coordinates and actions can be taken
 * from each space on the grid.
 * 
 * Real-world examples of GridWorld problems include:
 *  - Robots in a real-world environment such as a warehouse, house, store, yard, etc.
 *  - 2D or 3D board games.
 *  - 2D or 3D grid-based video games.
 *  - And more.
 * 
 * For this class, we will only focus on 2D square GridWorlds. But, this can be easily modfied
 * or generalized to allow GridWorlds of other dimensions.
 */
export default class GridWorld
{
    private _grid: number[][];
    private _numOfGridRows: number;
    private _numOfGridCols: number;

    /**
     * Constructor
     * 
     * @param grid A 2D array of rows and columns where the value is typically the
     * reward for a current (x,y) coordinate on the grid.
     */
    constructor(grid: number[][])
    {
        this._grid = grid;
        this._numOfGridRows = this._grid.length;
        this._numOfGridCols = this._grid[0].length;
    }

    /****** Getters ******/

    get grid()
    {
        return this._grid;
    }

    get numOfGridRows()
    {
        return this._numOfGridRows;
    }

    get numOfGridCols()
    {
        return this._numOfGridCols;
    }
}