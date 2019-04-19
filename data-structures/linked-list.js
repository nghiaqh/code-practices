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
  constructor () {
    this.head = null
  }

  /**
   * Add a new Node to the Linked List
   * @param {*} data value for the new Node
   * @param {Number|null} location location to insert the new Node, if null, add to last place
   * @returns {null}
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

    const newNode = data instanceof Node ? data : new Node(data, currentNode ? currentNode.next : null)

    if (currentNode !== null) {
      currentNode.next = newNode
    } else {
      this.head = newNode
    }
  }

  /**
   * Remove last node from the linked list
   * @returns {Node} last node
   */
  pop () {
    let tail = this.head
    let node = this.head

    while (node !== null && node.next !== null) {
      tail = node
      node = node.next
    }
    tail.next = null
    return node
  }

  /**
   * Return number of nodes in the linked list
   * @returns {Number} an integer
   */
  size () {
    let node = this.head
    let i = 0
    while (node !== null) {
      i++
      node = node.next
    }

    return i
  }

  /**
   * Find a node at which 2 linked lists intersect
   * O(N)
   * @param {LinkedList} listA linked list a
   * @param {LinkedList} listB linked list b
   * @returns {Node} a node
   */
  static findIntersectionNode (listA, listB) {
    let nodeA = listA.head
    let nodeB = listB.head

    if (nodeA === null || nodeB === null) return null
    if (nodeA === nodeB) return nodeA

    while (nodeA) {
      while (nodeB) {
        if (nodeB === nodeA) return nodeA
        nodeB = nodeB.next
      }
      nodeA = nodeA.next
      nodeB = listB.head
    }

    return null
  }
}

module.exports = {
  Node,
  LinkedList
}
