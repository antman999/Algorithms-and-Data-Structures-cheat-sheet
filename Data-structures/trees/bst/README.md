# Binary Search Tree

![BST](https://miro.medium.com/max/1194/1*ziYvZzrttFYMXkkV9u66jw.png)

## What is a Binary search tree?

> A data structure that consist of nodes just like a linked list but this uses a parent child structure.
> Trees are non linear unlike linked list they can lead to many place.
> There are many tree structures but we will follow a binary search tree style.

## Why use a Binary Search tree?

A - A BST can very useful to have a structure if you need order as values to the left are lower and right are higher.

## When not to use a Binary Search tree?

A - If the order is not important or the search tree will not be organized, then you can use a linked list.

## Things to know about BST.

- In a bst all numbers to the left are smaller than the parent. All numbers to the right are bigger in value.
- Parents at most can have 2 children at most (a smaller and or bigger one.)
- Searching can be really fast since you can keep chopping off by half since you know values to the left are smaller and right are bigger.

## Terminology

| Name    | Meaning                                                                  |
| ------- | ------------------------------------------------------------------------ |
| Root    | The top node in a tree.(tip top)                                         |
| Child   | A node directly connected to another node when moving away from the root |
| Parent  | the converse notion of a child. Anything above is a parent node.         |
| Sibling | A group of node with the same parents.                                   |
| Leaf    | a node with no children                                                  |
| Edge    | the connection between one node and another                              |

## ** Below is Pseudocode for some of the methods in the file **

# Tree Traversal (BFS) and (DFS)

## Breadth-first search or (BFS)

> This method of traversing a tree takes advantage of searching across the tree. It will search the siblings the make its way down one and do it again.

![BFS](https://hackr.io/blog/media/architecture-of-bfs.png)

### Steps BFS

1. Create a queue(this can be an array) and a variable to store the values of nodes visited.
2. place the root node in the queue
3. Loop as long as there is anything in the queue
4. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
5. If theres a left property on the node dequeued add it to the queue.
6. if theres a right property on the node dequeued add it to the queue
7. Return the variable

## Depth First Search or (DFS)

> This method of traversing a tree takes advantage of searching down the tree. There is many ways to do so but we will cover PreOrder, PostOrder, inOrder.

## 1. Depth First PreOrder

![DFSpreOrder](https://khan4019.github.io/front-end-Interview-Questions/images/preorder.jpg)

> This method will go down all the way with the left side then work its way back up to the right side.

### Steps DFS- PreOrder

1. Create a variable to store the values of nodes visited.
2. Store the root of the BST in a var called current
3. Write a helper function which accepts a node.

- Push the values of the node to the var that stores the values.
- If the node has a left property, call the helper function with left property on the node.
- If the node has a right property, call the helper function with the right property on the node.

4. Invoke the helper function with the current var.
5. Return the array of values.

## 2. Depth First PostOrder

![DFSPostOrder](https://www.java2blog.com/wp-content/uploads/2014/07/PostOrderTraversalBinaryTree-1.jpg)

> With postOrder you traverse the entire branch first then add it to the visited. In other words this will go down as much as possible then start adding to our array.

### Steps DFS- PostOrder

1. Create a var to store the values of nodes visited.
2. Store the root of the BST in a var called current
3. Write a helper function which accepts a node.

- If the node has a left property, call the helper function with the left property on the node.
- If the node has a right property, call the helper function with the right property on the node.
- Push the values of the node to the variable that stores the values.

4. Invoke the helper function with the current value.
5. Return the array of values.

## 3. Depth First inOrder

![InOrder](https://www.java2blog.com/wp-content/uploads/2014/07/InOrderTraversalBinaryTree-1.jpg)

> With InOrder Our output will be in order. Meaning we are grabbing the lowest value first and working our way up.

### Steps DFS- inOrder

1. Create a var to store the values of nodes visited.
2. Store the root of the BST in a var called current
3. Write a helper function which accepts a node.

- If the node has a left property, call the helper function with the left property on the node.
- Push the values of the node to the variable that stores the values.
- If the node has a right property, call the helper function with the right property on the node.

4. Invoke the helper function with the current value.
5. Return the array of values.

# BFS or DFS??

| BFS                                                                     | DFS                                                                                  |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Dont use BFS if the tree is wide you have to visit every single sibling | If the tree is extremely wide use DFS because you can you just visit a given branch. |
| Use BFS when trees are narrower                                         | Avoid DFS in this case                                                               |
