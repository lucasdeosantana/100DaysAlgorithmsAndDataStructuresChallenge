class NodeC{
    data
    next
    constructor(data, next){
        this.data = data
        this.next = next
    }
}
class LinkedList{
    headNode
    constructor(value){
        if(value){
            this.headNode= new NodeC(value, null)
        }
    }
    push(value){
        if(this.headNode){
            var nodes = this.headNode
            while(nodes.next){
                nodes = nodes.next
            }
            nodes.next = new NodeC(value, null)
        }else{
            this.headNode= new NodeC(value, null)
        }
    }
    pop(){
        var node = this.headNode
        var beforeNode
        while(node.next){
            beforeNode = node
            node = node.next
        }
        beforeNode.next = null
        return node.data
    }
    shift(){
        const data = this.headNode.data
        this.headNode = this.headNode.next
        return data
    }

}

modules.export = LinkedList