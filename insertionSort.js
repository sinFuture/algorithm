/**
 * 插入排序算法
 * @param {*} arr 
 */
var insertionSort_1 = (arr)=>{
    let len = arr.length;
    for(let i=1;i<len;i++){
        for(let j=i;j>0 && arr[j]<arr[j-1];j--){
            [arr[j-1],arr[j]] = [arr[j],arr[j-1]];
        }
    }
    return arr;
}