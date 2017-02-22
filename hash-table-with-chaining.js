var HashTable = function(){
  var size = 8;
  this.table = new Array(size);
  this.size = size;
  this.numberOfValuesStored = 0;
  this._hash = this._generateHashFunction(size);
};

HashTable.prototype._Node = function(key, value){
  this.value = value;
  this.key = key;
  this.next = null;
};

HashTable.prototype.insert = function(key, value){
  this._ensureCapacity();
  var hashedKey = this._hash(key);
  if(this.table[hashedKey]){
    var temp = this.table[hashedKey];
    this.table[hashedKey] = new this._Node(key, value);
    this.table[hashedKey].next = temp;
  } else {
    this.table[hashedKey] = new this._Node(key, value);
  }
  this.numberOfValuesStored += 1;
};

HashTable.prototype.search = function(key){
  var hashedKey = this._hash(key);
  if(this.table[hashedKey]){
    return this._searchList(this.table[hashedKey], key);
  }
};

HashTable.prototype._searchList = function(head, key){
  if(head === null){
    return;
  }
  if(head.key === key){
    return head.value;
  } else{
    return this._searchList(head.next, key);
  }
};

HashTable.prototype._generateHashFunction = function(size){
  return function(key){
    return key % size;
  };
};

HashTable.prototype._ensureCapacity = function(){
  var that = this;
  if(that.numberOfValuesStored === that.size){
    that.size = 2 * that.size;
    that.oldTable = that.table;
    that.table = new Array(that.size);
    that._hash = that._generateHashFunction(that.size);
    that.numberOfValuesStored = 0;
    that.oldTable.forEach(function(node){
      while(node){
        that.insert(node.key, node.value);
        node = node.next;
      }
    });
    delete that.oldTable;
  }
};

// Testing the hash table.

var hashTable = new HashTable();
hashTable.insert(0, "visha4");
hashTable.insert(1, "visha5");
hashTable.insert(2, "visha6");
hashTable.insert(3, "visha7");
hashTable.insert(4, "visha8");
hashTable.insert(55, "visha9");
hashTable.insert(36, "visha10");
hashTable.insert(77, "visha11");
hashTable.insert(8, "visha12");
hashTable.insert(9, "visha13");
hashTable.insert(10, "visha14");

console.log(hashTable.search(36));
console.log(hashTable.search(77));
console.log(hashTable.search(55));
console.log(hashTable.search(0));
console.log(hashTable.search(1));
console.log(hashTable.search(2));
console.log(hashTable.search(3));
console.log(hashTable.search(4));
