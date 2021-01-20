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

modules.export = Queue