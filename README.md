# AI-Reinforcement-Learning-in-TypeScript
This is a personal project of mine I decided to do in order to review and practice my AI Reinforcement Learning skills.

The goal of this project was to create an intermediate AI reinforcement learning agent based off of the popular AI Q-Learning Algorithm so that it could then be used as a baseline example of how an AI Q-Learning agent is implemented (in a typed programming language) to solve a common problem and then possibly be used or extended to solve other problems.

I decided to write this Q-Learning agent in TypeScript in order to get a good understanding of the exact types and organization of the code to implement an AI Q-Learning agent. Many of the popular examples of Q-Learning agent implementations on the Internet tend to be written in Python. Although Python is very popular for data-intensive topics such as AI, machine learning, scientific computing, data mining, etc, it may not be the best for beginners trying to understand AI algorithms due to its lack of types. With this implementation in TypeScript, we can easily see the exact types, abstractions, and code organization used for an implementation of a Q-Learning agent.

## Problem

I made the QLearningAgent in this project with generics so that it can work on many different problems that the programmer defines.

As for the main problem used to originally test when creating this project, I chose the "GridWorld" problem.

A GridWorld problem is a problem defined by a grid of spaces where each space on the grid can be repsented with coordinates and actions can be taken from each space on the grid.

 Real-world examples of GridWorld problems include:
 - Robots in a real-world environment such as a warehouse, house, store, yard, etc.
 - 2D or 3D board games.
 - 2D or 3D grid-based video games.
 - And more.

### Example

Here we have a GridWorld where an AI agent can be in any of the non-terminal (**white cells**) and cannot be in any of terminal (**black cells**) except for the goal cell (**green cell**).

The AI agent will start in some random white cell and it's goal is to make it to the green cell using the shortest path possible from where it starts at. Therefore, the AI agent will need to learn the shortest path between where it starts and the goal cell.

![GridWorld Exmaple](/Problem_Definitions/GridWorld/images/warehouse-map.png)

Q-Learning relies on the concept of rewards. Therefore, we can define a reward the agent receives for each cell when the AI agent enters it.

Below is the same GridWorld with the chosen rewards. You can see this specific GridWorld defined in [App.ts](/App.ts) and implemented in [GridWorld.ts](/Problem_Definitions/GridWorld/GridWorld.ts) which is then use by the [GridWorldMDP.ts](/MDPs/GridWorldMDP.ts).

![GridWorld Example with Rewards](/Problem_Definitions/GridWorld/images/warehouse-map-rewards.png)

It's important to note that this specific GridWorld problem doesn't apply to any one real-world example but it can in fact apply to many. For example, the grid above may represent the map for a maze game, the layout of a board game, or even a real-world map of a store or warehouse where the black cells are shelves, the white cells are aisles, and the green cell is the exit.<sup>[2]</sup> This one problem can be used to represent many other problems. Of course, if the problems get too detailed or specific, a new class (possibly extending the GridWorld class) will need to be created.

This project only implements this one high-level problem for the Q-Learning agent to solve, but as stated before, the QLearningAgent has been implemented with generics allowing it to work with other problems. That is, to implement other problems, one would need to, at minimum, define an MDP class and Environment class for the problem, and it would work with the QLearningAgent.

## Code Organization

- **Agents/** - Contains the classes that implement different AI agents. In this case, it only implements a QLearningAgent.

- **Contracts/** - Contains the interface contracts that define how certain AI abstractions such as MDPs, Evironments, and QReinforcementAgents should be implemented.

- **Environments/** - Contains classes that implement Environments for specific problems in which an AI agent will operate in.

- **MDPs/** - Contains classes that implement the Markov Decision Process (MDP) descriptions for specific problems which will be referenced by an Environment.

- **Problem_Definitions/** - Contains subfolders with classes that describe the real-world problems an AI will attempt to solve. MDPs will reference these.

For more detailed exlpanations, checkout the documentation comments in any of the TyeScript files.

## Run the AI Agent

This section will explain how to run the AI agent.

### Prerequisites

The following are required to run this web application:

- NodeJS runtime environment and NPM which you can get on the [NodeJS website](https://nodejs.org/en/download/).

### Steps

1. Fork/download the files in this GitHub project.

2. In your terminal, change into the directory of this project and perform an NPM install to install the dependencies for this project.

```
npm install
```

3. Use the TypeScript compiler to transpile the TypeScript (.ts) files into JavaScript (.js) files.

```
npx tsc
```

4. Use node to run the AI agent.

```
node App.js
```

[App.ts](/App.ts) already has example code that instantiates an MDP, Environment, and QLearningAgent for the GridWorld problem. It trains the agent and prints out the optimal (best) policy the agent has learned for a variety of different spaces on the grid in order to reach the goal.

## References
1. [CS188 Intro to AI UC Berkeley by Dan Klein and Pieter Abbeel](http://ai.berkeley.edu/lecture_videos.html)

2. [Q-Learning: A Complete Example in Python by Dr. Daniel Soper](https://www.youtube.com/watch?v=iKdlKYG78j4)

3. [Q-Learning: A Complete Example in Python Google CoLab Notebook](https://colab.research.google.com/drive/1E2RViy7xmor0mhqskZV14_NUj2jMpJz3)
