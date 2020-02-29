const Node = (value, next = null) => {
  return {
    value,
    next
  };
};

const LinkedList = val => {
  const head = Node(val, null);

  const _addNode = node => {
    let current = head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  };

  return {
    head,
    addNode: node => _addNode(node)
  };
};

export { Node };

export default LinkedList;
