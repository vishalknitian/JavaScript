var Node = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

var bstInsert = function(bst, value){
  if(!bst){
    bst = new Node(value);
  }
  else{
    if(bst.value >= value){
      if(bst.left === null){
        bst.left = new Node(value);
      }
      else{
        bstInsert(bst.left, value);
      }
    }
    else{
      if(bst.right === null){
        bst.right = new Node(value);
      }
      else{
        bstInsert(bst.right, value);
      }
    }
  }
  return bst;
};

var bstTraverseInOrder = function(bst){
  if(!bst){
    return;
  }
  bstTraverseInOrder(bst.left);
  console.log(bst.value);
  bstTraverseInOrder(bst.right);
};

var bst;

bst = bstInsert(bst, 40);
bst = bstInsert(bst, 20);
bst = bstInsert(bst, 60);
bst = bstInsert(bst, 10);
bst = bstInsert(bst, 50);
bst = bstInsert(bst, 70);
bst = bstInsert(bst, 30);

bstTraverseInOrder(bst);
