/**
 * 插入排序算法1
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
/**
 * 插入排序算法2
 * @param {*} arr 
 */
var insertionSort_2 = (arr)=>{
    let len = arr.length;
    for(let i=1;i<len;i++){
        let temp = arr[i];
        let j;
        for(j=i;j>0 && arr[j-1]>temp;j--){
            arr[j] = arr[j-1];
        }
        arr[j] = temp;
    }
    return arr;
}