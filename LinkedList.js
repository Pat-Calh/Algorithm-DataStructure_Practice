// User defined class node 
class Node { 
    // constructor 
    constructor(element) 
    { 
        this.element = element; 
        this.next = null;
    } 
}

// linkedlist class 
class LinkedList { 
    constructor() 
    { 
        this.head = null; 
        this.size = 0; 
    } 
  
    // functions to be implemented 
    // add(element)
    add() {

        //create node
        var node = new node(element);

        //create current
        var current;

        //check if this is the first in list and if so make head
        if(this.head == null){
            this.head = node;
        }
        else{
            current = this.head;
        }
    }
    // insertAt(element, location) 
    // removeFrom(location) 
    // removeElement(element) 
  
    // Helper Methods 
    // isEmpty 
    // size_Of_List 
    // PrintList 
} 