import HashTable from '.';

let hashTable;

beforeEach(() => {
  hashTable = new HashTable(8);
});

describe('Testing Hash Tables', () => {
  it('adds a key-value entry to the hash table with set()', () => {
    hashTable.set('orange', 1000);
    expect(hashTable.get('orange')).toEqual(1000);
  });
  it('removes the entry from the hash table with remove()', () => {
    hashTable.set('orange', 1000);
    hashTable.set('apples', 5000);
    hashTable.set('bananas', 100);

    hashTable.remove('orange');
    hashTable.remove('apples');
    expect(hashTable.get('orange')).toBeUndefined();
    expect(hashTable.get('apples')).toBeUndefined();
    expect(hashTable.get('bananas')).toEqual(100);
  });

  it.only('checks for duplicate key', () => {
    try {
      hashTable.set('orange', 1000);
      hashTable.set('orange', 1000);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Hashtable cannnot have duplicate keys');
    }
  });
});
