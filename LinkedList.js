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

            //place at end of list
            while(current.next != null){
                current = current.next();
            }

            current.next = node;
        }
        this.size ++;
    }
    // insertAt(element, location) 
    insertAt(element, index){
        //check for validity
        if(index > 0 && index > this.size){
            return false;
        }else{
            //create new node
            var node = new node(element);
            var current;
            var previous;
            current = this.head;

            // add the element to the 
            // first index 
            if(node.next ==0 ){
                node.next = head;
                this.head = node;
            }else{
                //iterate through the linkedlist to index
                current = this.head;
                var turn = 0;
                while(turn < index){
                    previous = current;
                    current = current.next;
                    turn ++;
                }
            }
        }
    }
    // removeFrom(location) 
    // removeElement(element) 
  
    // Helper Methods 
    // isEmpty 
    // size_Of_List 
    // PrintList 
} 