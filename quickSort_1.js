let quickSort = (arr)=>{
    return _quickSort(arr,0,arr.length-1);
}
let insertSort = (arr,l,r)=>{
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
let _quickSort = (arr,l,r)=>{
    //当l-r<15的时候也可以采用插入排序来优化，这是第二个优化的地方
    // if(l>=r){
    //     return;
    // }
    if(r-l<=15){
        insertSort(arr,l,r);
        return;
    }
    let p=_partition(arr,l,r);
    _quickSort(arr,l,p-1);
    _quickSort(arr,p+1,r);
    return arr;
}
let _partition = (arr,l,r)=>{
    //第一个优化
    let index = Math.floor(Math.random()*(r-l+1)+l);
    [arr[l],arr[index]] = [arr[index],arr[l]];
    let v = arr[l];
    let j=l;
    for(let i=l+1;i<=r;i++){
        if(arr[i]<v){
            [arr[j+1],arr[i]] = [arr[i],arr[j+1]];
            j++;
        }
    }
    [arr[l],arr[j]] = [arr[j],arr[l]];
    return j;
}