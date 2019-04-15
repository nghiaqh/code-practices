/**
 * A doubly linked list is a linear data structure where each element is a separate object linked using 2 pointers: previous and next.
 *
 * Each node of a list is made up of 3 items:
 * - The data
 * - A reference to previous node
 * - A reference to next node
 *
 * Last node has a next reference to null
 * Entry point is called head, which reference to first node
 */

class DoublyLinkedNode {
  constructor (data, next, prev) {
    this.data = data
    this.next = next
    this.prev = prev
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null
  }

  push (data) {
    if (this.head === null) {
      this.head = new DoublyLinkedNode(data, null, null)
    } else {
      let node = this.head
      while (node !== null && node.next !== null) {
        node = node.next
      }
      const newNode = new DoublyLinkedNode(data, null, node)
      node.next = newNode
    }
  }
}

module.exports = {
  DoublyLinkedNode,
  DoublyLinkedList
}
