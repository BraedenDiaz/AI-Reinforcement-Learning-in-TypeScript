import GridWorld from "../Problem Definitions/GridWorld/GridWorld";
import { GridWorldState, GridWorldAction } from "../Problem Definitions/GridWorld/GridWorldTypes";
import Util from "../Util";

/**
 * Author: Braeden Diaz
 */
export default class GridworldMDP implements MDP
{
    private _gridWorld: GridWorld;

    /**
     * Constructor
     * 
     * @param gridWorld The GridWorld that this MDP will use to get/define the
     * states, actions, and rewards for.
     */
    public constructor(gridWorld: GridWorld)
    {
        this._gridWorld = gridWorld;
    }

    /****** Getters ******/

    public get gridWorld()
    {
        return this._gridWorld;
    }

    /****** Public Methods ******/

    /**
     * Returns all the states for a problem or the entire problem definition
     * itself.
     * 
     * This is typically used for testing or debugging purposes on small problems
     * and isn't really needed for a fully functioning MDP.
     */
    public getStates(): number[][]
    {
        return this._gridWorld.grid;
    }

    /**
     * Returns the starting GridWorldState for the MDP.
     * 
     * The start state depends on the exact problem definition and MDP.
     * 
     * In the case of GridWorld, we will have the start state be a random
     * space (coordinate) in the grid.
     */
    public getStartState(): GridWorldState
    {
        let row = Util.randNumBetween(0, this._gridWorld.numOfGridRows - 1);
        let col = Util.randNumBetween(0, this._gridWorld.numOfGridCols - 1);
        
        while (this.isTerminalState([row, col]))
        {
            row = Util.randNumBetween(0, this._gridWorld.numOfGridRows - 1);
            col = Util.randNumBetween(0, this._gridWorld.numOfGridCols - 1);
        }

        return [row, col];
    }

    /**
     * Returns whether or not the passed in GridWorldState is a terminal
     * state (finished state) or not.
     * 
     * @param state The GridWorldState to check.
     * @returns A boolean specifying if the passed in GridWorldState is a
     * terminal state or not.
     */
    public isTerminalState(state: GridWorldState): boolean
    {
        const [row, col] = state;
        return this._gridWorld.grid[row][col] !== -1;
    }

    /**
     * Returns one or more possible actions that can be taken
     * from the passed in GridWorldState.
     * 
     * @param state The GridWorldState to get the possible actions for.
     * @returns A list of one or more possible actions that can
     * be taken from the GridWorldState.
     */
    public getPossibleActions(state: GridWorldState): GridWorldAction[]
    {
        if (this.getReward(state) !== -1)
        {
            return [];
        }
        else
        {
            return [GridWorldAction.UP, GridWorldAction.RIGHT, GridWorldAction.DOWN, GridWorldAction.LEFT];
        }
    }

    /**
     * Returns the reward for the passed in GridWorldState.
     * 
     * An AI agent will typically want to check the reward it receives
     * from the next GridWorldState it enters after performing an GridWorldAction.
     * 
     * @param state The GridWorldState to get the reward for.
     * @returns A numerical reward for the GridWorldState.
     */
    public getReward(state: GridWorldState): number
    {
        const [row, col] = state;
        return this._gridWorld.grid[row][col];
    }
    
}