/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(array, start=0, end=array.length-1){
    let pivot = array[0];
    let pivotIndex = 0;
    for(i=start; i<=end; i++){
        if(pivot>array[i]){
            pivotIndex++;
            [array[i], array[pivotIndex]] = [array[pivotIndex],array[i]]
        }
    }
    [array[0], array[pivotIndex]] = [array[pivotIndex],array[0]]
    return pivotIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(array) {
    console.log(array);
    if(array.length<2) return array;
    let pivotIndex = pivot(array);
    return [...quickSort(array.slice(0,pivotIndex)),array[pivotIndex],...quickSort(array.slice(pivotIndex+1))];
}

module.exports = {quickSort, pivot};