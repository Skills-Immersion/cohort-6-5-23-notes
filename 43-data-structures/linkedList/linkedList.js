class Node {
    constructor(value, next = null) { //constructor; how to make our objects
        //properties of our objects
        this.value = value;
        this.next = next;
    }
    //methods of our objects
}

class LinkedList {
    //attributes
    constructor() {
        this.head = null;
    }
    //methods
    //adding to front
    addToFront(value) {
        let newNode = new Node(value);
        if ( this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        return this;
    }
    
    //finding
    find(isMatch) { // (node, index) => node.value === "11"
        let index = 0;
        let node = this.head//our node that will traverse the list
        while (node) {
            //if we find what we are looking for
            if ( isMatch(node, index) ) {
                return node;
            }
            //continue searching
            index++;
            //tell our node to be the next node
            // 13 | --> 11 | --> 7 | --> o
            node = node.next
        }
    }

    //inserting in the middle or end
    insert(value, isMatch) {
        if (this.head) { //check to see if not empty
            //determine where to insert  
            //find the node to insert after
            let previousNode = this.find(isMatch);
            //if we didnt find the node
            if (!previousNode) throw new Error("no node silly");
            let newNode = new Node(value, previousNode.next);
            previousNode.next = newNode;
        } else {
            this.addToFront(value) //call if sll is empty
        }
    }

    removeFront() {
        if ( this.head ) {
            this.head = this.head.next //{13 -> {11 ->}}
        }
        return this;
    }

    remove(isMatch) {
        // i = 2
        //                  
        // 13 -> 11  -> 6
        // 0     1      2    
        if (this.head === null) {// List is empty
            return this;
        }

        // If head node matches what we are looking for
        if ( isMatch(this.head, 0)) {
            return this.removeFront();
        }

        //otherwise we need to traverse
        let index = 1;
        let previousNode = this.head;
        let currentNode = this.head.next;

        while (currentNode) {
            if ( isMatch(currentNode, index)) {
                previousNode.next = currentNode.next;
                return this;
            }
            // move to the next node
            previousNode = currentNode;
            currentNode = currentNode.next;
            index++
        }
        return this; // if the node was not found return the sll
    }

}

let sll = new LinkedList()
sll.addToFront(7).addToFront(11).addToFront(13)
let momsLuckyNumber = sll.find((node, index) => index === 2)
console.log(momsLuckyNumber);
