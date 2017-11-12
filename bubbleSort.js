/**
 * 冒泡排序算法
 * @param {*} arr 
 */
var bubbleSort_1 = (arr) =>{
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