class Stack{
    _stackMemory = []
    _top = 0
    constructor(size) {
        this.size = size - 1 
    }

    push(value) {
        if(this._top<this.size){
            this._stackMemory.push(value)
            this._top+=1
            return this.top-1
        }else{
            return null
        }
    }
    pop(value){
        if(this._top>0){
            this._top-=1
            return this._stackMemory.pop()
        }else{
            return null
        }
    }
    top(){
        if(this._top>0){
            return this._stackMemory[this._top-1]
        }else{
            return null
        }
    }
    copy(){
        const copyThis = new this.constructor(this.size+1)
        this._stackMemory.map(value=>copyThis.push(value))
        return copyThis
    }
}
module.exports = Stack
