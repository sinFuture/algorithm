class maxHeap {
    constructor () {
        this.data = [];
        this.count = 0;
        this.shiftUp = function (count){
            while(count>1 && this.data[Math.floor(count/2)] < this.data[count]){
                [this.data[Math.floor(count/2)],this.data[count]] = [this.data[count],this.data[Math.floor(count/2)]];
                count = Math.floor(count/2);
            }
        }
    }

    size () {
        return this.count;
    }

    isEmpty () {
        return this.count === 0;
    }

    insert (data) {
        this.data[++this.count] = data;
        this.shiftUp(this.count);
    }
}

let _maxHeap = new maxHeap();
_maxHeap.insert(32);
_maxHeap.insert(45);
_maxHeap.insert(145);
_maxHeap.insert(30);
_maxHeap.insert(1);
_maxHeap.insert(13);
_maxHeap.insert(14);
console.log(_maxHeap.data);