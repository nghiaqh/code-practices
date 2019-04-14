/**
 * A linked list is a linear data structure where each element is a separate object.
 * The element are linked using pointers.
 *
 * Each node of a list is made up of 2 items:
 * - the data
 * - and a reference to the next node
 *
 * The last node has a reference to null.
 * The entry point is called head, which is a reference to first node.
 */

class Node {
  constructor (data, nextNode) {
    this.data = data
    this.next = nextNode
  }
}

class LinkedList {
  constructor (data) {
    if (data) {
      const node = (data, null)
      this.head = node
    } else {
      this.head = null
    }
  }

  /**
   * Add a new Node to Linked List
   * @param {*} data value for the new Node
   * @param {Number|null} location location to insert the new Node, if null, add to last place
   */
  push (data, location = null) {
    let i = 0
    let limit = parseInt(location)
    let currentNode = this.head

    if (limit && limit > 0) {
      while (currentNode && currentNode.next && i + 1 < limit) {
        currentNode = currentNode.next
        i++
      }
    } else {
      while (currentNode && currentNode.next) {
        currentNode = currentNode.next
      }
    }

    const newNode = new Node(data, currentNode ? currentNode.next : null)
    if (currentNode !== null) {
      currentNode.next = newNode
    } else {
      this.head = newNode
    }
  }
}

module.exports = {
  Node,
  LinkedList
}
