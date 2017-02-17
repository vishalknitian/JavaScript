// Heap is actually an array visualized as a tree.

// Max Heap

"use strict";

var Heap = function(array){
  this.heap = array;
};

Heap.prototype.parent = function(i){
  if(i === 0){
    return null;
  }
  return parseInt((i + 1) / 2) - 1;
};

Heap.prototype.left = function(i){
  return 2 * i + 1;
};

Heap.prototype.right = function(i){
  return 2 * i + 2;
};

Heap.prototype.maxHeapify = function(i){
  var left = this.left(i);
  var right = this.right(i);
  var leftChild = left < this.heap.length ? this.heap[left] : Number.NEGATIVE_INFINITY;
  var rightChild = right < this.heap.length ? this.heap[right] : Number.NEGATIVE_INFINITY;

  if(this.heap[i] >= leftChild && this.heap[i] >= rightChild){
    return;
  } else{
    var largestChild = leftChild < rightChild ? right : left;
    var temp = this.heap[i];
    this.heap[i] = this.heap[largestChild];
    this.heap[largestChild] = temp;
    this.maxHeapify(largestChild);
  }
};

Heap.prototype.increaseKey = function(value, i){
  if(this.heap[i] > value){
    throw "The value entered should be greater than the previous one";
  } else {
    this.heap[i] = value;
    while(this.parent(i) !== null){
      var parent = this.parent(i);
      if(this.parent(i) === null || this.heap[parent] > value){
        break;
      }else{
        var temp = this.heap[parent];
        this.heap[parent] = this.heap[i];
        this.heap[i] = temp;
      }
      i = parent;
    }
  }
};

Heap.prototype.insert = function(value){
  this.heap.push(Number.NEGATIVE_INFINITY);
  this.increaseKey(value, this.heap.length - 1);
};

Heap.prototype.print = function(){
  this.heap.forEach(function(element){
    console.log(element);
  });
  console.log(" ");
};

var heap = new Heap([2,14,12,8,7,5,3]);
heap.print();
heap.maxHeapify(0);
heap.print();
heap.increaseKey(20, 6);
heap.print();
heap.insert(25);
heap.print();
