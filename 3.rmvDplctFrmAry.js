/***
 * @param {number[]} nums
 * @return {number}
 * array is non-descending order/ integers(hava both positiv and negative value)
 */

function removeDuplicates(arr) {

    let x = 0;
    for( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] > arr[x] ) {
            x = x+1;
            arr[x] = arr[i]
        }
    }

    // console.log( arr )

    return (x+1);
     

}

console.log( removeDuplicates([0,0,0,1,2,2,3,4,5,]) ) 