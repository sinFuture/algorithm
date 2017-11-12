//https://juejin.im/entry/57d906ee79bc440065d276a1
console.log("第一种算法：");
var startstamp = Date.parse(new Date());
console.log(bubbleSort_1(random(26,30000,10000)));
var stopstamp = Date.parse(new Date());
console.log(stopstamp-startstamp+'ms');


console.log("第二种算法：");
var startstamp = Date.parse(new Date());
console.log(bubbleSort_2(random(26,30000,10000)));
var stopstamp = Date.parse(new Date());
console.log(stopstamp-startstamp+'ms');