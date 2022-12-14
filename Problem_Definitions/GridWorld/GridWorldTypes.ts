
/**
 * Author: Braeden Diaz
 * 
 * Type definitions for GridWorld states and actions.
 */

// A GridWorldState is simply the (x,y) coordinates on the grid
export type GridWorldState = [number, number];

export enum GridWorldAction
{
    UP = "UP",
    RIGHT = "RIGHT",
    DOWN = "DOWN",
    LEFT = "LEFT"
}