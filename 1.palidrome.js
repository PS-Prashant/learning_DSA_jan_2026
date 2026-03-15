//Palidrome - 
// Input: x = 121
// Output: true

// Input: x = -121
// Output: false


// function isPalidrome( num ) {

//     let str = num.toString();
//     let rev = str.split('').reverse().join('')

//     return str == rev;

// }

// console.log( isPalidrome(-121) )



// ??============================================================================

function isPalidrome( num ) {

    let rev = 0;
    let n = num

    if ( num <= 0 ) return false;

    while( n > 0 ) {

        let rem = n%10;
        rev = rev*10 + rem;
        n = Math.floor(n/10)

    }

    return rev == num;

}

console.log( isPalidrome(1231) )