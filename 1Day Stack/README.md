# 100DaysAlgorithmsAndDataStructuresChallenge
<h2 align="center">#1 - Day One A Stack!<h2>

<p align="center"><img src="https://github.com/lucasdeosantana/100DaysAlgorithmsAndDataStructuresChallenge/blob/main/1Day%20Stack/StackExample.png" width="700"></p>


A Stack is an abstract data type that serves as a collection of elements. The Stack use a order of elements named LIFO(Last In, First Out), this data type is useful when implement functions, parsers, expression evaluation, and backtracking algorithms.

---

## Use

´´´javascript
    const Stack = require('./Stack')
    const newStack = new Stack(10)
    newStack.push("Insert in Stack")
    newStack.pop("Remove from Stack")
    newStack.copy() //Generate a copy of Stack.
´´´