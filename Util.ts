
/**
 * Author: Braeden Diaz
 */
export default class Util
{
    public static randNumBetween(min: number, max: number): number
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public static randChoice(arr: any[]): any
    {
        return arr[Util.randNumBetween(0, arr.length - 1)];
    }

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

            if (currentValue> max)
            {
                max = currentValue;
                maxIdx = i;
            }
        }

        return maxIdx;
    }
}