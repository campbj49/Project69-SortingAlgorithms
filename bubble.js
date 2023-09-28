/**Accepts an array of numbers and returns it sorted using the bubble algorithm */

function bubbleSort(array) {
    for(i=array.length; i>0; i--)
        for(j=0; j<i; j++)
            if(array[j]>array[j+1]) [array[j], array[j+1]] = [array[j+1], array[j]]
    return array;
}

module.exports = bubbleSort;