/***
 * @param {number[]} prices
 * @param {number} max profit
 *
 */

function sellStock( prices ) {

    let min = prices[0];
    let profit = 0;

    for( let i=1; i< prices.length; i++ ) {
        if ( prices[i] - min > profit ) {
            profit = prices[i] - min;
        }

        if ( prices[i] < min ) {
            min = prices[i];
        }
    }
    return profit;

}

console.log( sellStock([9, 3, 2, 5, 3, 7, 9]) );