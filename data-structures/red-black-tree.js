class Node {
  constructor (data, left = null, right = null, parent = null, isRed = true) {
    this.data = data
    this.left = left
    this.right = right
    this.parent = parent
    this.isRed = isRed
  }

  insert (number, child) {
    if (this[child] === null) this[child] = new Node(number)
    else if (this[child].data > number) this[child].insert(number, 'left')
    else if (this[child].data < number) this[child].insert(number, 'right')
  }

  height () {
    const { left, right } = this
    if (left === null && right === null) return 1
    const height = Math.max((left && left.height()) || 0, (right && right.height()) || 0)
    return height + 1
  }
}

/**
 * self-balancing binary search tree
 */
class RedBlackTree {
  constructor () {
    this.root = null
  }

  /**
   * Insert new node to tree
   * @param {number} number
   * @param {Node} root
   */
  static insert (number, root) {
    if (root === null) {
      root = new Node(number)
      return root
    }

    if (root.data < number) {
      root.right = RedBlackTree.insert(number, root.right)
    } else if (root.data > number) {
      root.left = RedBlackTree.insert(number, root.left)
    }

    return root
  }

  insert (number) {
    if (this.root === null) this.root = new Node(number)
    else {
      if (this.root.data > number) this.root.insert(number, 'left')
      else if (this.root.data < number) this.root.insert(number, 'right')
    }
  }

  balance () {

  }
}

module.exports = {
  Node,
  RedBlackTree
}
