//https://juejin.im/entry/57d906ee79bc440065d276a1
/**
    console.log("冒泡排序算法：");
    var startstamp = Date.parse(new Date());
    console.log(bubbleSort_1(random(26,30000,10000)));
    var stopstamp = Date.parse(new Date());
    console.log(stopstamp-startstamp+'ms');
*/

/**
    console.log("选择排序算法：");
    var startstamp = Date.parse(new Date());
    console.log(selectionSort_1(random(26,30000,10)));
    var stopstamp = Date.parse(new Date());
    console.log(stopstamp-startstamp+'ms');
*/

// console.log("插入排序算法：");
// var startstamp = Date.parse(new Date());
// console.log(insertionSort_2(random(26,30000,10000)));
// var stopstamp = Date.parse(new Date());
// console.log(stopstamp-startstamp+'ms');

console.log("快速排序算法：");
var startstamp = Date.parse(new Date());
var arr=invertNumber(26,30000000,10);
console.log(arr);
console.log(quickSort(arr,4));
// console.log(mergeSort([3,4,2,1]));
var stopstamp = Date.parse(new Date());
console.log(stopstamp-startstamp+'ms');