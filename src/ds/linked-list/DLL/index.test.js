import DoublyLinkedList from '.';

/**
 * create
 * append
 * prepend
 * get
 * remove
 *
 */
let list;
beforeEach(() => {
  list = new DoublyLinkedList(10);
});

describe('Testing Doubly Linked List', () => {
  it('creates a linked list with a single node', () => {
    expect(list.length).toBe(1);
    expect(list.head.value).toBe(10);
    expect(list.tail.value).toBe(10);
  });
  it('appends a node to the linked list with a given value', () => {
    list.append(20);
    expect(list.length).toBe(2);
    expect(list.head.value).toBe(10);
    expect(list.tail.value).toBe(20);
  });
  it('gets a node at given index', () => {
    list.append(20);
    list.append(30);
    list.append(40);
    expect(list.get(2)).toBe(30);
  });
  it('prepends a node to the linked list with a given value', () => {
    list.prepend(100);
    expect(list.length).toBe(2);
    expect(list.head.value).toBe(100);
    expect(list.tail.value).toBe(10);
  });
  it('inserts a node at the beginning', () => {
    list.append(20);
    list.append(30);
    list.append(50);
    list.insert(0, 40);

    expect(list.length).toBe(5);
    expect(list.get(0)).toBe(40);
  });

  it('inserts a node at the end', () => {
    list.append(20);
    list.append(30);
    list.append(50);
    list.insert(3, 40);

    expect(list.length).toBe(5);
    expect(list.get(3)).toBe(40);
    expect(list.get(4)).toBe(50);
  });

  it('inserts a node in the middle', () => {
    list.append(20);
    list.append(30);
    list.append(50);
    list.insert(2, 40);

    expect(list.get(2)).toBe(40);
    expect(list.length).toBe(5);
  });
  it('removes a node at specific index', () => {
    list.append(20);
    list.append(30);
    list.append(50);
    list.remove(2);
    expect(list.length).toBe(3);
    expect(list.get(2)).toBe(50);
  });
});
