# 100DaysAlgorithmsAndDataStructuresChallenge
<h2 align="center">#2 - Day Two A Queue!<h2>

<p align="center"><img src="https://github.com/lucasdeosantana/100DaysAlgorithmsAndDataStructuresChallenge/blob/main/2%20-%20Day%20Queue/QueueExample.bmp" width="700"></p>


In computer science, a queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence. By convention, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and the end at which elements are removed is called the head or front of the queue, analogously to the words used when people line up to wait for goods or services. 
The operations of a queue make it a first-in-first-out (FIFO) data structure. In a FIFO data structure, the first element added to the queue will be the first one to be removed. This is equivalent to the requirement that once a new element is added, all elements that were added before have to be removed before the new element can be removed. A queue is an example of a linear data structure, or more abstractly a sequential collection. Queues are common in computer programs, where they are implemented as data structures coupled with access routines, as an abstract data structure or in object-oriented languages as classes. Common implementations are circular buffers and linked lists. 

---

## Use

``` javascript
    const Stack = require('./Queue')
    const newQueue =  new Queue() // The constructor can receive a first push too.
    newQueue.enQueue("Add elements to a Queue!")
    newQueue.deQueue()  // Get and Remove a element from Queue
    newQueue.search("Return an array with indexes of elements")
```