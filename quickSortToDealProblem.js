let quickSort = (arr,k)=>{
    if(k>=0 && k<arr.length){
        return _quickSort(arr,0,arr.length-1,k);
    }
    
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
//求数组中第k+1小的元素
let _quickSort = (arr,l,r,k)=>{
    if(l==r){
        return arr[l];
    }
    let p=_partition(arr,l,r);
    if(p==k){
        return arr[p];
    }else if(k<p){
        return _quickSort(arr,l,p-1,k);
    }else{
        return _quickSort(arr,p+1,r,k);
    }
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