/***
 * @param {number}
 * @range {-2**31 to 2**31-1} if not pass then return {0}
 * @return { number }
 */

function reverseInt(num) {
    let rev = 0;
    let isnegative = num < 0 ? -1 : 1;

    if ( num < 0 )  num = Math.abs(num);

    while( num > 0 ) {
        let lastDgt = num % 10;
        num = Math.floor(num/10);

        rev = rev*10 + lastDgt;

    }

    // let limit = Math.pow(2, 31);
    let limit = 2**31;
    if( rev < -limit || rev > limit -1 ) return 0;

    return rev*isnegative;
}

console.log( reverseInt(1567) )
console.log( reverseInt(-1567) )
console.log( reverseInt(1234456789) )