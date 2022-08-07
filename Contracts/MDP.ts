/**
 * Author: Braeden Diaz
 * 
 * MDP Interface
 * 
 * An interface contract that specifies the required properties and methods
 * needed to implement a class representing a Markov Decision Process (MDP).
 * 
 * A Markov Descision Process (MDP) describes the states, actions, transitions.
 * and rewards for a particular problem. In the case of Q-Learning, we don't know
 * the transitions or rewards and instead get those from the problem itself.
 * 
 * MDPs are typically used by an Environment to get an undertstanding of the
 * problem.
 */
interface MDP
{
    /**
     * Returns all the states for a problem or the entire problem definition
     * itself.
     * 
     * This is typically used for testing or debugging purposes on small problems
     * and isn't really needed for a fully functioning MDP.
     */
    getStates(): any;

    /**
     * Returns the start state for the MDP.
     * 
     * The start state depends on the exact problem definition and MDP.
     */
    getStartState(): any;

    /**
     * Returns whether or not the passed in state is
     * a terminal state (finished state) or not.
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
     * @param state The state to get the possible actions for.
     * @returns A list of one or more possible actions that can
     * be taken from the state.
     */
    getPossibleActions(state: any): any;

    /**
     * Returns the reward for the passed in state.
     * 
     * An AI agent typically wants to check the reward it receives
     * from the next state it enters after performing an action.
     * 
     * @param state The state to get the reward for.
     * @returns A number representing the reward for the state.
     */
    getReward(state: any): number;
}