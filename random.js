let random = (min,max,n) =>{
    let arr = [];
    for(let i=0;i<n;i++){
        console.log()
        arr.push(Math.floor(Math.random()*(max-min)+min));
    }
    return arr;
}

let sameNumber = (min,max,n)=>{
    let arr=[];
    for(let i = min;arr.length<n && i<=max;i++){
        arr.push(i);
    }
    return arr;
}

let invertNumber = (min,max,n)=>{
    let arr=[];
    for(let i = max;arr.length<n && i>=min;i--){
        arr.push(i);
    }
    return arr;
}