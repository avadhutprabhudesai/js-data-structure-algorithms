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
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let node = this.root;

    while (true) {
      let dir;
      if (value < node.value) {
        dir = 'left';
      } else {
        dir = 'right';
      }
      if (node[dir] !== null) {
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
    let result = null;

    while (node) {
      if (node.value === value) {
        result = node;
        break;
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
    return result;
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
        // node to be deleted is a leaf node
        if (!(current.right || current.left)) {
          parent[dir] = null;
        }
        // node to be deleted has only left child
        else if (current.left && current.right == null) {
          parent[dir] = current.left;
        }
        // node to be deleted has only right child
        else if (current.right && current.left == null) {
          parent[dir] = current.right;
        }
        // node to be deleted has both left and right child
        else if (current.left && current.right) {
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

  clean() {
    this.root = null;
  }

  breadthFirstSearch() {
    let list = [],
      queue = [];
    let currentNode = this.root;
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  /**
   *        9
   *      4    20
   *   1  6 15   100
   */
  breadthFirstSearchR(queue, list) {
    // break condition
    if (!queue.length) {
      return list;
    }

    let currentNode = queue.shift();

    list.push(currentNode.value);
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }

    return this.breadthFirstSearchR(queue, list);
  }
}

export const preOrderTraverse = (node, list) => {
  if (node == null) return list;
  list.push(node.value);

  preOrderTraverse(node.left, list);
  preOrderTraverse(node.right, list);

  return list;
};

export const inOrderTraverse = (node, list) => {
  if (node == null) return list;

  inOrderTraverse(node.left, list);
  list.push(node.value);
  inOrderTraverse(node.right, list);

  return list;
};

export const postOrderTraverse = (node, list) => {
  if (node == null) return list;

  postOrderTraverse(node.left, list);
  postOrderTraverse(node.right, list);
  list.push(node.value);

  return list;
};
export const traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};

export const calculateHeight = (node) => {
  /**
   * ===base case
   * node === null return 0
   *
   *
   * ===hypothesis
   * Math.max(calculateHeight(leftChild), calculateHeight(rightChild))
   *
   *
   * ===induction
   * 1 + hypothesis
   */
  if (node === null) return 0;

  return 1 + Math.max(calculateHeight(node.left), calculateHeight(node.right));
};

export default BinarySearchTree;
