# 100DaysAlgorithmsAndDataStructuresChallenge
<h2 align="center">#2 - Day Two A Queue!<h2>

<p align="center"><img src="https://github.com/lucasdeosantana/100DaysAlgorithmsAndDataStructuresChallenge/blob/main/3%20-%20Day%20Linked%20List/linkedListExample.png" width="700"></p>


A linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. More complex variants add additional links, allowing more efficient insertion or removal of nodes at arbitrary positions. A drawback of linked lists is that access time is linear (and difficult to pipeline). Faster access, such as random access, is not feasible. Arrays have better cache locality compared to linked lists. 

---

## Use

``` javascript
    const LinkedList = require('./LinkedList')
    const newQueue =  new LinkedList() // The constructor can receive a first push too.
    newQueue.push("Add elements to a Queue!")
    newQueue.pop()  // Get and Remove last element from Queue.
    newQueue.shift()  // Get and Remove first element from Queue.
```