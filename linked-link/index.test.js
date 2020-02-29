import LinkedList, { Node } from './index';

describe('LinkedList', () => {
  const headVal = 'node 1';
  const linkedList = LinkedList(headVal);

  describe('head node', () => {
    test('sets value', () => {
      expect(linkedList.head.value).toBe(headVal);
    });

    test('sets next to null', () => {
      expect(linkedList.head.next).toBe(null);
    });
  });

  describe('addNode', () => {
    const node2 = Node('node 2');
    const node3 = Node('node 3');

    test('adds a node to the end of the list', () => {
      linkedList.addNode(node2);
      expect(linkedList.head.next).toBe(node2);
    });

    test('adds a third node to the list', () => {
      linkedList.addNode(node3);
      expect(linkedList.head.next.next).toBe(node3);
    });
  });
});
