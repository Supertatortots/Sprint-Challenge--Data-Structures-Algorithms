class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  depthFirstForEach(cb) {
    /* Your code here */
    //grabs cb
    cb(this.value);
    //checks left and right for cb and invokes it
    if (this.left) {
      this
        .left
        .depthFirstForEach(cb);
    }
    if (this.right) {
      this
        .right
        .depthFirstForEach(cb);
    }
  }

  breadthFirstForEach(cb) {
    /* Your code here */
    // let nodes= [];
    // //make a loop that goes through the entire tree 
    // //applies CB
    // nodes.push(this);
    // //should go through nodes
    // while (nodes.length > 0) {
    //   if (nodes.[0].left) {
    //     nodes.push(nodes.left);
    //   } 
    }
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this
          .left
          .insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this
          .right
          .insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) 
      return null;
    
    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}

module.exports = BinarySearchTree;