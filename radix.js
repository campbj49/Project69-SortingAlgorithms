/**radix sort using buckets instead of comparissons */
function radixSort(array) {
    //create "bucket" array
    let buckets = [];
    for(i=0; i<10;i++)
        buckets.push([]);

    //loop through the array a number of times equal to the longest number
    for(digit=0;digit<mostDigits(array); digit++){
        //load ints into buckets
        for(let num of array)
            buckets[getDigit(num, digit)].push(num);
        
        //extract the array back out of the buckets
        array = [];
        for(bucket of buckets)
            while(bucket.length >0) array.push(bucket.shift())
    }

    return array;
}

/**helper functions */

/**gets specified digit of a given integer */
function getDigit(num, digit){
    let res = parseInt(String(num).charAt(digitCount(num)-digit-1))
    if(isNaN(res)) res = 0;
    return res;
}

/**gets count of digits of given int */
function digitCount(num){
    return String(num).length;
}

/**gets most digits of an array of ints */
function mostDigits(array){
    let maxLen = 0
    for(num of array)
        if(String(num).length>maxLen) maxLen = String(num).length;
    return maxLen;
}

module.exports = {getDigit, digitCount, mostDigits, radixSort};