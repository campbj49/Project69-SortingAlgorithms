/**Impementation of the insertion sort algorithm */
function insertionSort(array) {
    for(i=1; i<array.length; i++){
        //find incorrectly placed elements
        if(array[i]< array[i-1]){
            //place them correctly in the sorted part of the array
            for(j=i-1; j>=0; j--){
                if(j===0 || array[i]>array[j-1]){
                    //splice value into array
                    array = [...array.slice(0,j),array[i],...array.slice(j,i), ...array.slice(i+1, array.length)]
                    j=0;
                }
            }

        }
    }

    return array;
}

module.exports = insertionSort;