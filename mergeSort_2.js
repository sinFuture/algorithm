let mergeSort = (arr)=>{
    let len = arr.length;
    if(len===1){
        return arr;
    }
    let mid = Math.floor(len/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}
let merge = (leftArr,rightArr)=>{
    let result=[];
    while(leftArr.length>0 && rightArr.length>0){
        if(leftArr[0]<rightArr[0]){
            result.push(leftArr.shift());
        }else{
            result.push(rightArr.shift());
        }
    }
    return result.concat(leftArr,rightArr)
}