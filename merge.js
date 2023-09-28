/**zips two arrays together and returns the full result */
function merge(array1, array2) {
    //if the last element of one array is less than the first of the other then they can simply be concatonated
    if(array1[array1.length]< array2[0]) return array1.concat(array2);
    if(array2[array2.length]< array1[0]) return array2.concat(array1);

    let out = [];
    let p1 = 0;
    let p2 = 0;
    while(out.length < array1.length+array2.length){
        //once one of the arrays is empty push the rest of the other
        if(p1===array1.length){
            out.push(array2[p2]);
            p2++;
        }
        else if(p2===array2.length){
            out.push(array1[p1]);
            p1++;
        }
        else if(array1[p1] <= array2[p2]){
            out.push(array1[p1]);
            p1++;
        }
        else{
            out.push(array2[p2]);
            p2++;
        }
    }
    return out;
}

/**uses the merge function to recurse through a given array */
function mergeSort(array) {
    //if the array is too small to split any further return the sorted array
    if(array.length===0) return [];
    if(array.length===1) return array;

    //get the halfway point
    let halfway = Math.floor(array.length/2);
    
    //return the merged split arrays
    return merge(mergeSort(array.slice(halfway)), mergeSort(array.slice(0,halfway)));
}

module.exports = { merge, mergeSort};