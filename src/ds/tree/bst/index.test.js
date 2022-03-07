import BinarySearchTree, { traverse } from '.';

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

  // 9,4,20,1,6,15,100
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
});
