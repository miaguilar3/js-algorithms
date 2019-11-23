class LinkedListNode{
  /**
   * initialize node
   * @param {*} value 
   * @param {LinkedListNode} next 
   */
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }

  /**
   * print node's value
   */
  toString(){
    return `${this.value}`;
  }
}

class LinkedList{
  /**
   * initialize null head and tail refs
   */
  constructor(){
    this.head = null;
    this.tail = null
  }

  /**
   * Adds node to front of list
   * @param {*} value 
   */
  prepend(value){
    const node = new LinkedListNode(value, this.head);
    if(this.head === null){
      this.tail = node;
    }
    this.head = node;
  }

  /**
   * Adds node to back of list
   * @param {*} value 
   */
  append(value){
    const node = new LinkedListNode(value);

    if(this.head === null){
      this.head = node;
      this.tail = node;
    }
    else{
      this.tail.next = node;
      this.tail = node;
    }
  }

  /**
   * array to linkedlist
   * @param {Array} arr 
   */
  fromArray(arr){
    this.head = null;
    this.tail = null;
    arr.forEach((el)=>{this.append(el)});
  }

  /**
   * delete all occurences
   * @param {*} value 
   */
  delete(value){
    if(!this.head){ return; }

    // remove any leading nodes with target value
    let node = this.head;
    if(node.value === value){
      while(node.value === value){
        node = node.next;
      }
    }
    this.head = node;

    // should no longer be pointing to a node with target value
    while(node && node.next !== null){
      if(node.next.value === value){
        let runner = node.next;
        while(runner && runner.value === value){
          runner = runner.next;
        }
        node.next = runner;
      }
      else{
        node = node.next;
      }
    }
    
    // check if tail was 'deleted'
    if(this.tail.value === value){
      this.tail = node;
    }

  }

  /**
   * 
   */
  find(value){
    var node = this.head;
    while(node !== null){
      if(node.value == value){
        return node;
      }
      node = node.next;
    }
    return node;
  }


  /**
   * 
   */
  deleteTail(){
    if(this.head === this.tail){
      this.head = null;
      this.tail = null;
      return;
    }
    
    var node = this.head;
    while(node.next.next !== null){
      node = node.next;
    }
    node.next = null;
    
    this.tail = node;
  }


  /**
   * 
   */
  deleteHead(){
    if(this.head === this.tail){
      this.head = null;
      this.tail = null;
      return;
    }

    this.head = this.head.next;
  }


  /**
   * 
   */
  reverse(){
    if(this.head === this.tail){
      return;
    }

    var node = this.head;
    var prev = null;
    var next = node.next;
    this.tail = node;

    while(node){
      node.next = prev;
      prev = node;
      node = next;
      next = node ? node.next : null;
    }

    this.head = prev;
  }

  /**
   * print comma separated node values
   */
  printList(){
    let node = this.head;
    const arr = [];
    while(node !== null){
      arr.push(node.toString());
      node = node.next;
    }
    console.log(arr.join(', '));
  }
}

module.exports = LinkedList;