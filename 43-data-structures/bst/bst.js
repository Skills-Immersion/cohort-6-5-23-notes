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
}

let bst = new BST()
bst.insert(11,11)
bst.insert(7,7)