/**
 * 第一种选择排序算法
 * @param {*} arr 
 */
var selectionSort_1 = (arr) =>{
    let len =arr.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}
/**
 * 第二种选择排序
 * @param {*} arr 
 */
var selectionSort_2 = (arr) =>{
    let len =arr.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}