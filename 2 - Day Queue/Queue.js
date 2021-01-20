class Queue{
    _QueueMemory = []
    constructor(value){
        if(value){
            this.enQueue(value)
        }
    }
    enQueue(value){
        this._QueueMemory.push(value)
        return true
    }
    deQueue(){
        return this._QueueMemory.shift(0)
    }
    search(value){
        const index = []
        for(var i=0; i<this._QueueMemory.length; i++){
            if(this._QueueMemory[i]===value){
                index.push(i)
            }
        }
        return index
    }
}

const queue =  new Queue()
queue.enQueue("123")
queue.enQueue("1234")
queue.enQueue("12345")
queue.deQueue()
console.log(queue.search("123"))
console.log(queue)
// modules.export=Queue