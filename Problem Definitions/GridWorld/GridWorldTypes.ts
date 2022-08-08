
/**
 * Author: Braeden Diaz
 * 
 * Type definitions for GridWorld states and actions.
 */

export type GridWorldState = [number, number];

export enum GridWorldAction
{
    NONE = "NONE",
    UP = "UP",
    RIGHT = "RIGHT",
    DOWN = "DOWN",
    LEFT = "LEFT"
}