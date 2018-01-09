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
        this.shiftDown = function(k){
            while(2*k <=this.count){
                let j = 2*k;
                if(j+1 <= this.count && this.data[j+1] > this.data[j]){
                    j+=1;
                }
                if(this.data[k] >= this.data[j]){
                    break;
                }
                [this.data[k],this.data[j]] = [this.data[j],this.data[k]];
                k = j;
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

    extractMax() {
        if(this.count > 0){
            var ret = this.data[1];
            console.log(ret);
            [this.data[1],this.data[this.count]] = [this.data[this.count],this.data[1]];
            this.count--;
            this.shiftDown(1);
            return ret;
        }
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
while(!_maxHeap.isEmpty()){
    _maxHeap.extractMax();
}