const Queue = require("../queue/queue")

class BST {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        // check if the tree is empty
        if ( this.key === null) { // making a root node
            this.key = key;
            this.value = value;
        } else if ( key < this.key ) { // check if we need to go left
            // check if we cant go left
            if ( this.left === null ) {
                // we need to set new node here
                this.left = new BST(key, value, this);
            } else {
                // there is a left child
                this.left.insert(key, value);
            }
        } else { //check right
            if ( this.right === null ) {
                this.right = new BST(key,value, this);
            } else {
                this.right.insert(key, value);
            }
        }
        return this;
    }

    find(key) {
        // is this the node we are looking for
        if ( key === this.key ) {
            return [this.key, this.value];
        } else if ( key < this.key && this.left ) { // do i need to go left and can i go left
            return this.left.find(key);
        } else if ( key > this.key && this.right ) {
            return this.right.find(key);
        } else {
            return null;
        }
    }

    /*
        4
    2       6
  1   3   5    
*/
    remove(key) {
        // is this the node i want to remove
        if ( key === this.key ) {
            // check if has two children
            if ( this.left && this.right ) {
                // find the max on the left side
                let nodeToPromote = this.right._findMin();
                //let nodeToPromote = this.left._findMax();
                this.key = nodeToPromote.key;
                this.value = nodeToPromote.value;
                // remove the duplicate node
                nodeToPromote.remove(nodeToPromote.key)
            } else if ( this.left ) { // do you have one child
                this._replaceWith(this.left);
            } else if ( this.right ) {
                this._replaceWith(this.right);
            } else {
                this._replaceWith(null)
            }
        } else if ( key < this.key && this.left ) { // traverse
            return this.left.remove(key);
        } else if ( key > this.key && this.right ) {
            return this.right.remove(key)
        } else {
            return null;
        }
    }

            /*
                4   
            2       5
          1   3      
    */



    _replaceWith(node) { //  {5}
        // the logic for removing nodes
        // check the node we are replacings parent
        if ( this.parent ) {
            // current node to be replaced we need to find what side from the parents perspective
            if ( this.parent.left === this ) {
                // tell the parent to replace it with the node we were given
                this.parent.left = node;
            } else if ( this.parent.right === this ) {
                this.parent.right = node;
            }
            // replace the replacements node parent refrence LOOK DEBUGGER
            if (node) {
                node.parent = this.parent
            }
            console.log(node.parent.right);
        } else { // if it is a root node
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            } else { // reset tree
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }   
    }

    //find min helper
    _findMin() {
        if (!this.left) { // if i cant go left aka left is null
            return this; //return me that node
        }
        return this.left._findMin(); // keep traversing right recursively
    }

    //find max helper
    _findMax() {
        if (!this.right) { // if i cant go right aka right is null
            return this; //return me that node
        }
        return this.right._findMax(); // keep traversing left recursively
    }

    //pre order we push the root node first
    dfsPreOrder(values = []) {
        //process
        values.push(this.value);
        //step left recursively
        if (this.left) {
            this.left.dfsPreOrder(values);
        }
        //step right recursively
        if (this.right) {
            this.right.dfsPreOrder(values);
        }
        return values
    }

    //post order we push the root node at the end
    dfsPostOrder(values = []) {
        //step left recursively
        if (this.left) {
            this.left.dfsPostOrder(values);
        }
        //step right recursively
        if (this.right) {
            this.right.dfsPostOrder(values);
        }
        //process
        values.push(this.value);
        return values
    }

    //traversal that gives us our tree sorted
    dfsInOrder(values = []) {
        //step left recursively
        if (this.left) {
            this.left.dfsInOrder(values);
        }
        //process
        values.push(this.value);
        //step right recursively
        if (this.right) {
            this.right.dfsInOrder(values);
        }
        return values
    }

    breadthFirstSearch(values = []) {
        /*
                4
            2       6
        1   3     5   7
        */
        // utilize a Q for constant speed operations for enqueue and DQ
        let queue = new Queue;
        queue.enqueue(this); // put the root node into the Q
        let node = this;

        while (node) {
            // traverse
            values.push(node.value);
            // check left and put it in Q
            if (node.left) {
                queue.enqueue(node.left)
            }
            // check right and put it in Q
            if (node.right) {
                queue.enqueue(node.right)
            }
            // move on to the next node
            node = queue.dequeue()
        }
        return values;
    }
    // [4,2,6,1,3,5,7]    Q 


    
    getHeight() {
        /**
     * This method calculates the height of a binary tree.
     *
     * The height of a tree is the length of the longest path from the root to a leaf.
     * The height of a tree with a single node (root only) is 0.
     * The height of an empty tree (no nodes) is -1.
     * 
     * For Example:
     * 
     *      A       The height of this tree is 2 (A -> C -> D)
     *     / \
     *    B   C
     *         \
     *          D
     * 
     *      E       The height of this tree is 1 (E -> F)
     *     /
     *    F
     * 
     *      G       The height of this tree is 0 as there is only one node.
     * 
     */
        // Base case: If the tree is empty (this.key === null), return -1.
        if ( this.key === null ) return -1;
        
        // Initialize variables to hold the height of the left and right subtrees.
        let leftHeight = -1;  // default value for empty subtree
        let rightHeight = -1; // default value for empty subtree
        
        // If there is a left child, calculate the height of the left subtree.
        if ( this.left ) leftHeight = this.left.getHeight();
        
        // If there is a right child, calculate the height of the right subtree.
        if ( this.right ) rightHeight = this.right.getHeight();
        
        // The height of the current tree is the maximum of the heights of its left and right subtrees, plus 1.
        return Math.max(leftHeight, rightHeight) + 1;
    }
   
    
    isBalanced() {
         /**
     * This method checks if a binary tree is balanced.
     * 
     * A binary tree is considered balanced if:
     *  - The left and right subtrees of every node differ in height by at most one.
     *  - Both the left and right subtrees are also balanced.
     *
     * For Example: 
     *     A                 B                  C
     *    / \               / \                / \
     *   B   C       is    C   D        is    D   E
     *  / \               /                 / \
     * D   E             F                 F   G
     * 
     *  Tree A, B, and C are balanced binary trees as the left and right subtrees of every node differ in height by at most one.
     *
     *   Tree D is not balanced.
     *     D
     *    /
     *   E
     *  / \
     * F   G
     * 
     */
        // Base case: If the tree is empty (this.key === null), return true as an empty tree is balanced.
        if (this.key === null) return true;
            
        // Initialize variables to hold the height of the left and right subtrees.
        let leftHeight = -1;
        let rightHeight = -1;
        
        // If there is a left child, calculate the height of the left subtree.
        if ( this.left ) leftHeight = this.left.getHeight();
        
        // If there is a right child, calculate the height of the right subtree.
        if (this.right) rightHeight = this.right.getHeight();
        
        // Check if the difference in heights of left and right subtrees is more than 1.
        if (Math.abs(leftHeight - rightHeight) > 1) return false;
        
        // Recursively check if the left subtree and the right subtree are balanced.
        return (this.left ? this.left.isBalanced() : true) && (this.right ? this.right.isBalanced() : true);
    }
    /*
    *    4
    *   / \
    *      6
    *       7 
    */
    
}

let bst = new BST()
bst.insert(4, 4).insert(6, 6).insert(7,7)
console.log(bst.getHeight());
/*
        4
    2       6
  1   3   5   7
*/