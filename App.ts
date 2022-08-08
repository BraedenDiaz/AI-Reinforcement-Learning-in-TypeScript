/**
 * App.ts
 * Author: Braeden Diaz
 */

import QLearningAgent from "./Agents/QLearningAgent";
import GridWorldEnvironment from "./Environments/GridWorldEnvironment";
import GridworldMDP from "./MDPs/GridWorldMDP";
import GridWorld from "./Problem Definitions/GridWorld/GridWorld";

const warehouseMapGrid: number[][] = [
    [-100, -100, -100, -100, -100, 100, -100, -100, -100, -100, -100],
    [-100, -1, -1, -1, -1, -1, -1, -1, -1, -1, -100],
    [-100, -1, -100, -100, -100, -100, -100, -1, -100, -1, -100],
    [-100, -1, -1, -1, -1, -1, -1, -1, -100, -1, -100],
    [-100, -100, -100, -1, -100, -100, -100, -1, -100, -100, -100],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-100, -100, -100, -100, -100, -1, -100, -100, -100, -100, -100],
    [-100, -1, -1, -1, -1, -1, -1, -1, -1, -1, -100],
    [-100, -100, -100, -1, -100, -100, -100, -1, -100, -100, -100],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100]
];

/**
 * Main entry function used to test the AI Q-Learning Agent.
 */
function main()
{
    // Define our GridWorld problem, MDP, Environment, and QLearningAgent
    const warehouseGridWorld = new GridWorld(warehouseMapGrid);
    const gridWorldMDP = new GridworldMDP(warehouseGridWorld);
    const gridworldEnvironment = new GridWorldEnvironment(gridWorldMDP);
    const gridWorldQLearningAgent = new QLearningAgent(gridworldEnvironment);

    // Train the QLearning Agent
    gridWorldQLearningAgent.train();

    // Print out the best policy for different GridWorld states.
    console.log(gridWorldQLearningAgent.getPolicy([3,9]));
    console.log(gridWorldQLearningAgent.getPolicy([5,0]));
    console.log(gridWorldQLearningAgent.getPolicy([9,5]));
    console.log(gridWorldQLearningAgent.getPolicy([7,7]));
    console.log(gridWorldQLearningAgent.getPolicy([6,9]));
}

main();