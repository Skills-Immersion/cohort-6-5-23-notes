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
        3
    2       6
  1      5   7
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

}

let bst = new BST()
bst.insert(4, 4).insert(2, 2).insert(6, 6).insert(1, 1).insert(3, 3).insert(5, 5).insert(7, 7)

/*
        4
    2       6
  1   3   5   7
*/