
/**
 * Author: Braeden Diaz
 * 
 * Environment Interface
 * 
 * An interface contract that specifies the required properties and methods
 * needed to implement a class representing an Environment.
 * 
 * An environment is an abstraction where an AI agent can perform its actions
 * within for a particular problem and see the resulting consequences of its
 * actions.
 */
interface Environment
{
    // An MDP of the problem for the environment to reference
    mdp: MDP;

    // The current state of the environment
    currentState: any;

    /**
     * Returns whether or not the passed in state is
     * a terminal state (finished state) or not.
     * 
     * This typically refers to the same method in an MDP class so it
     * can be used by an AI agent.
     * 
     * @param state The state to check.
     * @returns A boolean specifying if the passed in state is a terminal
     * state or not.
     */
    isTerminalState(state: any): boolean;

    /**
     * Returns one or more possible actions that can be taken
     * from the passed in state.
     * 
     * This typically refers to the same method in an MDP class so it
     * can be used by an AI agent.
     * 
     * @param state The state to get the possible actions for.
     * @returns A list of one or more possible actions that can
     * be taken from the state.
     */
    getPossibleActions(state: any): any;

    /**
     * Performs the specified action from the specfied state. It does so by
     * changing the current state of this environment to the next state the AI
     * agent enters after performing the action.
     * 
     * @param state The state to perform the action from.
     * @param action The action to perform.
     * @returns A tuple of the next state and reward received from entering
     * that next state from the previous state.
     */
    doAction(state: any, action: any): [any, number];

    /**
     * Resets this environment typically by setting the current state of this
     * enviroment to some initial state or start state as defined by the MDP.
     */
    reset(): void;
}