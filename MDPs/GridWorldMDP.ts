import GridWorld from "../Problem Definitions/GridWorld/GridWorld";
import { GridWorldState, GridWorldAction } from "../Problem Definitions/GridWorld/GridWorldTypes";

/**
 * Author: Braeden Diaz
 */
export default class GridworldMDP implements MDP
{
    private _gridWorld: GridWorld;

    constructor(gridWorld: GridWorld)
    {
        this._gridWorld = gridWorld;
    }

    /**
     * Returns all the states for a problem or the entire problem definition
     * itself.
     * 
     * This is typically used for testing or debugging purposes on small problems
     * and isn't really needed for a fully functioning MDP.
     */
    getStates(): number[][]
    {
        return this._gridWorld.grid;
    }

    getStartState(): GridWorldState
    {
        throw new Error("Method not implemented.");
    }

    isTerminalState(state: any): boolean
    {
        throw new Error("Method not implemented.");
    }

    getPossibleActions(state: GridWorldState)
    {
        throw new Error("Method not implemented.");
    }

    getReward(state: GridWorldState): number
    {
        throw new Error("Method not implemented.");
    }
    
}