const LinkedList = require('./linked-list');

let linkedList = new LinkedList();
linkedList.prepend(9);
linkedList.prepend(5);
linkedList.prepend(6);
linkedList.append(8);
linkedList.append(3);
linkedList.append(2);
linkedList.printList();

linkedList = new LinkedList();
linkedList.fromArray([8, 8, 8, 1, 2, 8, 2, 3, 8]);
linkedList.printList();
linkedList.delete(8);
linkedList.printList();

var linkedListNode = linkedList.find(2);
console.log(linkedListNode.value);

linkedList.deleteTail();
linkedList.printList();

linkedList.fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
linkedList.printList();
linkedList.reverse();
linkedList.printList();
