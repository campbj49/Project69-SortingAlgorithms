/**Sorts numbers with the selection sort algorithm */
function selectionSort(array) {
    //itereate through the whole array
    for(i=0; i<array.length; i++){
        let minDex = i;
        //search the rest of the array for a smaller val
        for(j=i; j<array.length; j++){
            if(array[j]<array[minDex])
                minDex = j;
        }
        if(minDex != i) [array[i], array[minDex]] = [array[minDex], array[i]]
    }

    return array;
}

module.exports = selectionSort;