/* eslint-disable no-constant-condition */
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    let newNode = new Node(value);
    let node = this.root;

    while (true) {
      let dir;
      if (value < node.value) {
        dir = 'left';
      } else {
        dir = 'right';
      }
      if (node[dir]) {
        node = node[dir];
      } else {
        node[dir] = newNode;
        break;
      }
    }
    return;
  }

  lookup(value) {
    let node = this.root;

    while (node) {
      if (node.value === value) {
        return node;
      } else {
        let dir;
        if (value < node.value) {
          dir = 'left';
        } else {
          dir = 'right';
        }
        node = node[dir];
      }
    }
    return node;
  }

  findSuccessorNode(root) {
    let node = root,
      parent = node;
    while (true) {
      if (!node.left) {
        parent.left = null;
        return node;
      }
      parent = node;
      node = node.left;
    }
  }

  remove(value) {
    if (!this.root) {
      return null;
    }

    let current = this.root,
      parent = current;
    let dir;

    while (current) {
      if (current.value === value) {
        // leaf node
        if (!(current.right || current.left)) {
          parent[dir] = null;
        }
        // only left child
        else if (current.left && current.right == null) {
          parent[dir] = current.left;
        }
        // only right child
        else if (current.right && current.left == null) {
          parent[dir] = current.right;
        } else if (current.left && current.right) {
          let successor = this.findSuccessorNode(current.right);
          successor.left = current.left;
          successor.right = current.right;
          parent[dir] = successor;
        }
        break;
      } else {
        parent = current;
        if (value < current.value) {
          dir = 'left';
        } else {
          dir = 'right';
        }
        current = current[dir];
      }
    }
  }
}
export const traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};

export default BinarySearchTree;
