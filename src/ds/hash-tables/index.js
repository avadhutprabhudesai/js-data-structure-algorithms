const { pipe } = require('ramda');

class HashTable {
  constructor(size = 4) {
    this.buckets = new Array(size).fill(1).map(() => []);
  }

  _generateHash = (key) => {
    return Array.from(key).reduce((acc, val) => {
      return (acc += val.charCodeAt());
    }, 0);
  };

  _mapValToBucket = (val) => {
    return val % this.buckets.length;
  };

  _generateHashFromKey = (key) => {
    return pipe(this._generateHash, this._mapValToBucket)(key);
  };
  _getBucketByHash = (hash) => {
    return this.buckets[hash];
  };
  _getBucketFromKey = pipe(this._generateHashFromKey, this._getBucketByHash);

  set(key, val) {
    const bucket = this._getBucketFromKey(key);
    bucket.push({ [key]: val });
  }
  get(key) {
    const bucket = this._getBucketFromKey(key);
    return bucket.find((entry) => key in entry)?.[key];
  }
  remove(key) {
    const hash = this._generateHashFromKey(key);
    this.buckets[hash] = this._getBucketFromKey(key).filter(
      (entry) => !(key in entry)
    );
  }
}

export default HashTable;
