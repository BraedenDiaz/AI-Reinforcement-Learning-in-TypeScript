import QReinforcementAgent from "../Contracts/QReinforcementAgent";
import Util from "../Util";

export default class QLearningAgent<T extends object, U extends object> extends QReinforcementAgent<T, U>
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
        const stateQValues = this._qValues.get(state.toString());

        if (stateQValues)
        {
            const actionQValue = stateQValues.get(action);

            if (actionQValue)
            {
                return actionQValue;
            }
            else
            {
                return 0.0;
            }
        }
        else
        {
            this._qValues.set(state.toString(), new Map<U, number>());
            return 0.0;
        }
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
        const possibleActions = this._environment.getPossibleActions(state);
        const actionQValues = [];

        if (possibleActions.length === 0)
        {
            return 0.0;
        }

        for (let action of possibleActions)
        {
            actionQValues.push(this.getQValue(state, action));
        }

        return Math.max.apply(null, actionQValues);
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
    protected getBestActionForState(state: T): (U | null)
    {
        const possibleActions = this._environment.getPossibleActions(state);
        const actionQValues = [];
        const actions = [];

        if (possibleActions.length === 0)
        {
            return null;
        }

        for (let action of possibleActions)
        {
            actionQValues.push(this.getQValue(state, action));
            actions.push(action);
        }

        return actions[Util.argMax(actionQValues)];
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
    protected getSomeAction(state: T): (U | null)
    {
        const possibleActions = this._environment.getPossibleActions(state);

        if (possibleActions.length === 0)
        {
            return null;
        }

        if (Math.random() < this._epsilon)
        {
            return Util.randChoice(possibleActions);
        }
        else
        {
            return this.getBestActionForState(state);
        }
    }

    /**
     * The main update method where the AI agent learns new Q-values based on the Q-Learning
     * formula and saves them to its lookup table.
     * 
     * Q-Learning Formula:
     * 
     *  Q(s,a) = Q(s,a) + alpha * (sample - Q(s,a))
     * 
     *  sample = reward + gamma * max_a' Q(s',a')
     * 
     * @param state The state the agent is currently in.
     * @param action The action the agent decided to take from the state it's currently in.
     * @param nextState The next state the agent ended up in due to taking the action.
     * @param reward The reward the agent received from ending up in the next state.
     */
    protected update(state: T, action: U, nextState: T, reward: number): void
    {
        const qSA = this.getQValue(state, action);
        const maxQValueForNextState = this.getMaxQValueForState(nextState);
        const sample = reward + this._gamma * maxQValueForNextState;
        const newQValue = qSA + this._alpha * (sample - qSA);
        this._qValues.get(state.toString())!.set(action, newQValue);
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
    public getPolicy(state: T): U[]
    {
        const policy: U[] = [];
        let currentState = state;

        while (!this._environment.isTerminalState(currentState))
        {
            const bestAction = this.getBestActionForState(currentState);
            const [nextState, reward] = this._environment.doAction(currentState, bestAction);

            if (bestAction !== null)
            {
                policy.push(bestAction);
            }
            
            currentState = nextState;
        }

        return policy;
    }

    protected runEpisode(): void
    {
        this._environment.reset();

        while (true)
        {
            const currentState = this._environment.currentState;
            const possibleActions = this._environment.getPossibleActions(currentState);

            if (possibleActions.length === 0)
            {
                break;
            }

            const action = this.getSomeAction(currentState);
            if (action === null)
            {
                throw new Error("Agent selected no action.");
            }

            const [nextState, reward] = this._environment.doAction(currentState, action);

            this.update(currentState, action, nextState, reward);
        }
    }

    public train(): void
    {
        for (let i = 0; i < this._numOfTrainingEpisodes; i++)
        {
            this.runEpisode();
        }
    }
}