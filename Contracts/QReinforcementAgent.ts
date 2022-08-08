/**
 * Author: Braeden Diaz
 * 
 * QReinforcementAgent Abstraction
 * 
 * An abstract class that repsents a reinforcement learning agent. Specifically,
 * it represents a reinforcement agent for an agent that uses Q-Learning and therefore,
 * it specifies the properties and methods needed for a Q-Learning agent to work.
 */
export default abstract class QReinforcementAgent<T extends object, U extends object>
{
    protected _environment: Environment;
    protected _alpha: number;
    protected _gamma: number;
    protected _epsilon: number;
    protected _numOfTrainingEpisodes: number;

    /**
     * Constructor
     * 
     * @param alpha The agent's learning rate.
     * @param gamma The discount rate on rewards.
     * @param epsilon The epsilon-greedy exploration vs. exploitation factor.
     * @param numOfTrainingEpisodes The number of training episodes to run.
     */
    constructor(environment: Environment, alpha: number = 0.9, gamma: number = 0.9, epsilon: number = 0.9, numOfTrainingEpisodes: number = 5000)
    {
        this._environment = environment;
        this._alpha = alpha;
        this._gamma = gamma;
        this._epsilon = epsilon;
        this._numOfTrainingEpisodes = numOfTrainingEpisodes;
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
    protected abstract getQValue(state: T, action: U): number;

    /**
     * max_a Q(s,a)
     * 
     * Returns the largest Q-value for the specified state.
     * 
     * @param state The state to find the largest Q-value for.
     * @returns The largest Q-value for the state. --> max_a Q(s,a)
     */
    protected abstract getMaxQValueForState(state: T): number;

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
    protected abstract getBestActionForState(state: T): (U | null);

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
    protected abstract getSomeAction(state: T): (U | null);

    /**
     * The main update method where the AI agent learns new Q-values based on the Q-Learning
     * formula and saves them to its lookup table.
     * 
     * @param state The state the agent is currently in.
     * @param action The action the agent decided to take from the state it's currently in.
     * @param nextState The next state the agent ended up in due to taking the action.
     * @param reward The reward the agent received from ending up in the next state.
     */
    protected abstract update(state: T, action: U, nextState: T, reward: number): void;

    /**
     * Returns the currently best (hopefully optimal) policy for the agent to take
     * from the passed in starting state in an attempt to maximize all of its rewards.
     * 
     * @param state The state in which the agent begins and where we want to get the entire
     * optimal policy from.
     * @returns The currently best policy for the agent to follow from the specified state in
     * order to attempt to maximize all of its rewards.
     */
    public abstract getPolicy(state: T): U[];

    protected abstract runEpisode(): void;

    public abstract train(): void;
}