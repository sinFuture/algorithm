var _merge = (arr,l,mid,r)=>{
    let _arr=[];
    for(let i=l;i<=r;i++){
        _arr.push(arr[i]);
    }
    let i=l,j = mid+1;
    for(let k=l;k<=r;k++){
        if(i>mid){
            arr[k] = _arr[j-l];
            j++;
        }else if(j>r){
            arr[k] = _arr[i-l];
            i++;
        }else if(_arr[i-l]<_arr[j-l]){
            arr[k] = _arr[i-l];
            i++;
        }else{
            arr[k] = _arr[j-l];
            j++;
        }
    }
}
let mergeSort = (arr)=>{
    let len = arr.length;
    for(let sz = 1;sz <= len;sz+=sz){
        for(let j = 0;j+sz<len;j+=sz+sz){
            // if(arr[j+sz]>arr[j+sz+1]){
                _merge(arr,j,j+sz-1,Math.min(j+sz+sz-1,len-1));
            // }
        }
    }
    return arr;
}