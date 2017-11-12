/**
 * 选择排序
 * @param {*} arr 
 */
var selectionSort_1 = (arr)=>{
    let len = arr.length,temp;
    for(let i=0;i<len-1;i++){
        let minIndex = i;
        for(let j=i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        if(i!==minIndex){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];
        }
    }
    return arr;
};