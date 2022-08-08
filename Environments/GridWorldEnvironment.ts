import GridworldMDP from "../MDPs/GridWorldMDP";
import { GridWorldState, GridWorldAction } from "../Problem Definitions/GridWorld/GridWorldTypes";

export default class GridWorldEnvironment implements Environment
{
    private _mdp: GridworldMDP;
    private _currentState: GridWorldState;

    /**
     * Constructor
     * 
     * @param gridworldMDP The GridWorld MDP that this environment should work with.
     */
    public constructor(gridworldMDP: GridworldMDP)
    {
        this._mdp = gridworldMDP;
        this._currentState = this._mdp.getStartState();
    }

    /****** Getters ******/

    public get mdp()
    {
        return this._mdp;
    }

    public get currentState()
    {
        return this._currentState;
    }

    /****** Public Methods ******/

    /**
     * Returns whether or not the passed in GridWorldState is a terminal
     * state (finished state) or not.
     * 
     * This typically refers to the same method in an MDP class so it
     * can be used by an AI agent.
     * 
     * @param state The GridWorldState to check.
     * @returns A boolean specifying if the passed in GridWorldState is a
     * terminal state or not.
     */
    public isTerminalState(state: GridWorldState): boolean
    {
        return this._mdp.isTerminalState(state);
    }

    /**
     * Returns one or more possible actions that can be taken
     * from the passed in GridWorldState.
     * 
     * This typically refers to the same method in an MDP class so it
     * can be used by an AI agent.
     * 
     * @param state The GridWorldState to get the possible actions for.
     * @returns A list of one or more possible actions that can
     * be taken from the GridWorldState.
     */
    public getPossibleActions(state: GridWorldState): GridWorldAction[]
    {
        return this._mdp.getPossibleActions(state);
    }

    /**
     * Performs the specified GridWorldAction from the specfied GridWorldState. It does so by
     * changing the current state of this environment to the next GridWorldState the AI agent
     * enters after performing the GridWorldAction.
     * 
     * @param state The GridWorldState to perform the action from.
     * @param action The GridWorldAction to perform.
     * @returns A tuple of the next GridWorldState and reward received from entering that next
     * GridWorldState from the previous GridWorldState.
     */
    public doAction(state: GridWorldState, action: GridWorldAction): [GridWorldState, number]
    {
        let [row, col] = state;

        if (action === GridWorldAction.UP && row > 0)
        {
            row--;
        }
        else if (action === GridWorldAction.RIGHT && col < this._mdp.gridWorld.numOfGridCols - 1)
        {
            col++;
        }
        else if (action === GridWorldAction.DOWN && row < this._mdp.gridWorld.numOfGridRows - 1)
        {
            row++;
        }
        else if (action === GridWorldAction.LEFT && col > 0)
        {
            col--;
        }

        const nextState: GridWorldState = [row, col];
        const reward: number = this._mdp.getReward(nextState);

        return [nextState, reward];
    }

    
    /**
     * Resets this environment by setting the current state of this enviroment
     * to some initial state or start state as defined by the GridWorldMDP.
     */
    public reset(): void
    {
        this._currentState = this._mdp.getStartState();
    }
    
}