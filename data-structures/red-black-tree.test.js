const {
  Node,
  RedBlackTree
} = require('./red-black-tree')

test('Create a new Node', () => {
  expect(new Node(1)).toEqual({
    data: 1,
    left: null,
    right: null,
    isRed: true
  })
})

test('Create a new red black tree', () => {
  expect(new RedBlackTree()).toEqual({
    root: null
  })
})

test('Insert new node to a red black tree with static function', () => {
  const tree = new RedBlackTree()
  tree.root = RedBlackTree.insert(1, tree.root)
  tree.root = RedBlackTree.insert(0, tree.root)
  tree.root = RedBlackTree.insert(3, tree.root)

  expect(tree.root.data).toEqual(1)
  expect(tree.root.left).toEqual(new Node(0))
  expect(tree.root.right).toEqual(new Node(3))
})

test('Insert new node to a red black tree with instance function', () => {
  const tree = new RedBlackTree()
  tree.insert(1)
  tree.insert(0)
  tree.insert(3)

  expect(tree.root.data).toEqual(1)
  expect(tree.root.left).toEqual(new Node(0))
  expect(tree.root.right).toEqual(new Node(3))
})

test('Get node height', () => {
  const root = new Node(2)
  root.left = new Node(1)
  root.right = new Node(3)
  root.left.right = new Node(4)

  expect(root.height()).toEqual(3)
  expect(root.left.height()).toEqual(2)
  expect(root.left.right.height()).toEqual(1)
})
