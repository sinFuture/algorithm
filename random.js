var random = (min,max,n) =>{
    let arr = [];
    for(let i=0;i<n;i++){
        console.log()
        arr.push(Math.floor(Math.random()*(max-min)+min));
    }
    return arr;
}