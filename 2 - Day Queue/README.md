# 100DaysAlgorithmsAndDataStructuresChallenge
<h2 align="center">#2 - Day Two A Queue!<h2>

<p align="center"><img src="" width="700"></p>


In computer science, a queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence. By convention, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and the end at which elements are removed is called the head or front of the queue, analogously to the words used when people line up to wait for goods or services. 

---

## Use

``` javascript
    const Stack = require('./Queue')
    const newQueue =  new Queue() // The constructor can receive a first push too.
    newQueue.enQueue("Add elements to a Queue!")
    newQueue.deQueue()  // Get and Remove a element from Queue
    newQueue.search("Return an array with indexes of elements")
```