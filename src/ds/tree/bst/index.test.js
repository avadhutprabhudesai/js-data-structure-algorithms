import BinarySearchTree, {
  calculateHeight,
  inOrderTraverse,
  postOrderTraverse,
  preOrderTraverse,
  traverse,
} from '.';

/**
 *  insert
 *  lookup
 */
let bst;
beforeEach(() => {
  bst = new BinarySearchTree();
  bst.insert(9);
  bst.insert(4);
  bst.insert(20);
  bst.insert(1);
  bst.insert(6);
  bst.insert(15);
  bst.insert(100);

  /**
   *                    9
   *                   4       20
   *                 1   6   15  100
   */
});

afterEach(() => {
  bst.clean();
});

describe('Testing BST', () => {
  it('inserts an item in BST', () => {
    bst.insert(90);

    const node1 = bst.lookup(4);
    expect(node1.left.value).toEqual(1);
    expect(node1.right.value).toEqual(6);

    const node2 = bst.lookup(24);
    expect(node2).toBeNull();
  });
  // 9,4,20,1,6,15,100,5,2,35,27,54
  it('removes a leaf node from bst', () => {
    bst.insert(5);
    bst.insert(2);
    bst.insert(35);
    bst.insert(27);
    bst.insert(54);

    bst.remove(15);

    expect(bst.lookup(15)).toBeNull();
    expect(bst.lookup(20).left).toBeNull();
  });

  it('removes a node with only left child from bst', () => {
    bst.insert(5);
    bst.insert(2);
    bst.insert(35);
    bst.insert(27);
    bst.insert(54);

    bst.remove(6);

    expect(bst.lookup(6)).toBeNull();
    expect(bst.lookup(4).right.value).toBe(5);
  });

  it('removes a node with only right child from bst', () => {
    bst.insert(5);
    bst.insert(2);
    bst.insert(35);
    bst.insert(27);
    bst.insert(54);

    bst.remove(1);

    expect(bst.lookup(1)).toBeNull();
    expect(bst.lookup(4).left.value).toBe(2);
  });

  it('removes a node with both left and right child from bst', () => {
    bst.insert(5);
    bst.insert(2);
    bst.insert(35);
    bst.insert(27);
    bst.insert(54);

    bst.remove(20);

    expect(bst.lookup(20)).toBeNull();
    expect(bst.lookup(9).right.value).toBe(27);
    expect(bst.lookup(27).left.value).toBe(15);
    expect(bst.lookup(27).right.value).toBe(100);
    expect(bst.lookup(35).left).toBe(null);
  });

  it('traverses bst using imperative BFS', () => {
    expect(bst.breadthFirstSearch()).toEqual([9, 4, 20, 1, 6, 15, 100]);
  });
  it('traverses bst using recursive BFS', () => {
    expect(bst.breadthFirstSearchR([bst.root], [])).toEqual([
      9, 4, 20, 1, 6, 15, 100,
    ]);
  });
  it('traverses bst in preorder', () => {
    expect(preOrderTraverse(bst.root, [])).toEqual([9, 4, 1, 6, 20, 15, 100]);
  });
  it('traverses bst in inorder', () => {
    expect(inOrderTraverse(bst.root, [])).toEqual([1, 4, 6, 9, 15, 20, 100]);
  });
  it('traverses bst in postorder', () => {
    expect(postOrderTraverse(bst.root, [])).toEqual([1, 6, 4, 15, 100, 20, 9]);
  });
  it('calculates the height of the tree', () => {
    expect(calculateHeight(bst.root)).toBe(3);
    bst.insert(120);
    expect(calculateHeight(bst.root)).toBe(4);
    bst.remove(120);
    expect(calculateHeight(bst.root)).toBe(3);
  });
});
