const { Node, LinkedList } = require('./linked-list')

test('Create a new Node', () => {
  expect(new Node(1, null)).toEqual({
    data: 1,
    next: null
  })
})

test('Create a new Linked List', () => {
  const list = new LinkedList()
  expect(list.head).toBe(null)
})

test('Push a new Node to a Linked List', () => {
  const list = new LinkedList()
  list.push(1)
  expect(list.head).toEqual({
    data: 1,
    next: null
  })

  list.push(2)
  expect(list.head.next).toEqual({
    data: 2,
    next: null
  })

  list.push(1.1, 1)
  expect(list.head.next).toEqual({
    data: 1.1,
    next: {
      data: 2,
      next: null
    }
  })
})

test('Pop the last node from a Linked List', () => {
  const list = new LinkedList()
  list.push(1)
  list.push(2)
  list.push(3)
  expect(list.pop()).toEqual({
    data: 3,
    next: null
  })
  expect(list).toEqual({
    head: {
      data: 1,
      next: {
        data: 2,
        next: null
      }
    }
  })
  expect(list.pop()).toEqual({
    data: 2,
    next: null
  })
  expect(list.pop()).toEqual({
    data: 1,
    next: null
  })
})

test('Find intersection of 2 singly linked lists', () => {
  const listA = new LinkedList()
  const listB = new LinkedList()
  listA.push('a1')
  listA.push('a2')
  listA.push('c1')
  listA.push('c2')
  listA.push('c3')
  listB.push('b1')
  listB.push('b2')
  listB.push('b3')
  listB.push(listA.head.next.next)

  const c1 = LinkedList.findIntersectionNode(listA, listB)
  expect(c1).toEqual(listA.head.next.next)
})

test('Find intersection of 2 singly linked lists', () => {
  const listA = new LinkedList()
  const listB = new LinkedList()
  listA.push('a1')
  listA.push('c1')
  listA.push('c2')
  listA.push('c3')
  listB.push(listA.head.next)

  const c1 = LinkedList.findIntersectionNode(listA, listB)
  expect(c1).toEqual(listA.head.next)
})

test('Get number of nodes in a linked list', () => {
  const list = new LinkedList()
  expect(list.size()).toEqual(0)
  list.push(1)
  expect(list.size()).toEqual(1)
})
