const Node = (data, next) => {
  // if next is not passed as an arg, instead of next === undefined, set next = null;
  next = next ? next : null;
  data = data ? data : null;
  return { data, next };
};

const LinkedList = () => {
  head = null;

  getHead = () => {
    return head;
  };

  appendValue = (value) => {
    if (value === undefined) {
      console.error(`A value to append is expected.`);
      return;
    }

    value = Node(value);

    if (head === null) {
      head = value;
      return;
    }

    let currentNode = head;
    while (currentNode) {
      if (!currentNode.next) {
        currentNode.next = value;
        break;
      }

      currentNode = currentNode.next;
    }
  };

  return { getHead, appendValue };
};

n1 = Node(1, Node());
console.log(n1);

l1 = LinkedList();
console.log(l1.getHead());

l1.appendValue();
l1.appendValue(23);
console.log(l1.getHead());

l1.appendValue(-13);
console.log(l1.getHead());

l1.appendValue(-1223);
console.log(JSON.stringify(l1.getHead(), null, 2));
