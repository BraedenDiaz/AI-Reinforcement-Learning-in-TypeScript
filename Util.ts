
/**
 * Author: Braeden Diaz
 * 
 * Util.ts
 * 
 * A class of common static helper functions which can be used by other classes
 * to perform a desired function.
 */
export default class Util
{
    /**
     * Returns a random number between min and max (inclusive)
     * 
     * @param min The min number value.
     * @param max The max number value.
     * @returns A random number between min and max (inclusive).
     */
    public static randNumBetween(min: number, max: number): number
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Returns a random element from the passed in array.
     * 
     * @param arr The array to pick a random element from.
     * @returns A random element from the array.
     */
    public static randChoice(arr: any[]): any
    {
        return arr[Util.randNumBetween(0, arr.length - 1)];
    }

    /**
     * Returns the index of the largest element from the passed in array.
     * 
     * @param arr The array to find the index for the largest element.
     * @returns The index of the largest element in the passed in array.
     */
    public static argMax(arr: any[]): number
    {
        if (arr.length === 0)
        {
            return -1;
        }

        let max = arr[0];
        let maxIdx = 0;

        for (let i = 1; i < arr.length; i++)
        {
            const currentValue = arr[i];

            if (currentValue > max)
            {
                max = currentValue;
                maxIdx = i;
            }
        }

        return maxIdx;
    }
}