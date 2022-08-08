
/**
 * Author: Braeden Diaz
 */
export default class GridWorld
{
    private _grid: number[][];
    private _gridRows: number;
    private _gridCols: number;

    constructor(grid: number[][])
    {
        this._grid = grid;
        this._gridRows = this._grid.length;
        this._gridCols = this._grid[0].length;
    }

    get grid()
    {
        return this._grid;
    }

    get gridRows()
    {
        return this._gridRows;
    }

    get gridCols()
    {
        return this._gridCols;
    }
}