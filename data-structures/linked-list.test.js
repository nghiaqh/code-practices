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
