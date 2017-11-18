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
    let index = Math.floor(Math.random()*(r-l+1)+l);
    [arr[l],arr[index]] = [arr[index],arr[l]];
    let v = arr[l];
    let lt=l,gt=r+1,i=l+1;
    while(i<gt){
        if(arr[i]==v){
            i++;
        }else
        if(arr[i]<v){
            [arr[lt+1],arr[i]]=[arr[i],arr[lt+1]];
            lt++;
            i++;
        }
        if(arr[i]>v){
            [arr[i],arr[gt-1]]=[arr[gt-1],arr[i]];
            gt--;
        }
    }
    [arr[l],arr[lt]]=[arr[lt],arr[l]];

    _quickSort(arr,l,lt-1);
    _quickSort(arr,gt,r);
    return arr;
}
