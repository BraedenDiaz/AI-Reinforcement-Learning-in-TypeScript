import QReinforcementAgent from "../Contracts/QReinforcementAgent";

export default class QLearningAgent<T, U> extends QReinforcementAgent<T, U>
{
    private _qValues: Map<string, Map<U, number>>;

    /**
     * Constructor
     * 
     * @param environment The environment this QLearningAgent should work in.
     */
    constructor(environment: Environment)
    {
        super(environment);

        this._qValues = new Map<string, Map<U, number>>();
    }

    /**
     * Q(s,a)
     * 
     * Returns the current Q-value from a lookup table for the specified
     * state and action.
     * 
     * @param state The state.
     * @param action The action within the state to get the Q-value for.
     * @returns The Q-value for the state and action Q(s,a).
     */
    protected getQValue(state: T, action: U): number
    {
        throw new Error("Method not implemented.");
    }

    /**
     * max_a Q(s,a)
     * 
     * Returns the largest Q-value for the specified state.
     * 
     * @param state The state to find the largest Q-value for.
     * @returns The largest Q-value for the state. --> max_a Q(s,a)
     */
    protected getMaxQValueForState(state: T): number
    {
        throw new Error("Method not implemented.");
    }

    /**
     * Returns the currently best action to take from the specified state.
     * 
     * We say "currently best action" as during training, some actions may
     * not actually be the optimal (best) action to take from this state, but
     * it is "currently".
     * 
     * This is similar to the getMaxQValueForState() method but we return
     * the action corresponding to the max Q-value instead of the Q-value.
     * 
     * @param state The state to find the best action for.
     * @returns The currently best action to take from the specified state.
     */
    protected getBestActionForState(state: T): U
    {
        throw new Error("Method not implemented.");
    }

    /**
     * Returns some action to take from the specified state.
     * 
     * We say "some" action as this method will sometimes return the best action
     * to take in the current state and sometimes take a random action to take
     * in the current state.
     * 
     * It decides to take the currently best action or the random action in an
     * epsilon-greedy manner based on epsilon to encourage agent to engage in
     * exploration in order to learn more states within its enviroment.
     * 
     * @param state The state to get some action for.
     * @returns The currently best action from the state or a random action from the state.
     */
    protected getSomeAction(state: T): U
    {
        throw new Error("Method not implemented.");
    }

    /**
     * The main update method where the AI agent learns new Q-values based on the Q-Learning
     * formula and saves them to its lookup table.
     * 
     * @param state The state the agent is currently in.
     * @param action The action the agent decided to take from the state it's currently in.
     * @param nextState The next state the agent ended up in due to taking the action.
     * @param reward The reward the agent received from ending up in the next state.
     */
    protected update(state: T, action: U, nextState: T, reward: number): void
    {
        throw new Error("Method not implemented.");
    }

    /**
     * Returns the currently best (hopefully optimal) policy for the agent to take
     * from the passed in starting state in an attempt to maximize all of its rewards.
     * 
     * @param state The state in which the agent begins and where we want to get the entire
     * optimal policy from.
     * @returns The currently best policy for the agent to follow from the specified state in
     * order to attempt to maximize all of its rewards.
     */
    protected getPolicy(state: T): U[]
    {
        throw new Error("Method not implemented.");
    }
    
}