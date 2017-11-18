var mergeSort= (arr)=>{
    return _mergeSort(arr,0,arr.length-1);;
}
//优化二，当排序的数组用归并排序二分到很小的数组时可以用插入排序降低排序耗时。
var insertSort = (arr,l,r)=>{
    for(let i=l+1;i<=r;i++){
        let temp = arr[i];
        let j;
        for(j=i;j>l && arr[j-1]>temp;j--){
            arr[j] = arr[j-1];
        }
        arr[j]=temp;
    }
    return;
};
var _mergeSort = (arr,l,r)=>{
    if(l>=r){
        return 0;
    }
    // if(r-l<=15){
    //     insertSort(arr,l,r);
    //     return;
    // }
    let count=0;
    let mid = Math.floor((r+l)/2);
    count += _mergeSort(arr,l,mid);
    count += _mergeSort(arr,mid+1,r);
    //优化一，对于有序数列特别有作用，但是对于有些情况这个if判断会有的影响
    if(arr[mid]>arr[mid+1]){
        count += _merge(arr,l,mid,r);
    }
    return count;
}
var _merge = (arr,l,mid,r)=>{
    let _arr=[];
    for(let i=l;i<=r;i++){
        _arr.push(arr[i]);
    }
    let i=l,j = mid+1;
    let count = 0;
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
            count=count+(mid-i+1);
            j++;
        }
    }
    return count;
}