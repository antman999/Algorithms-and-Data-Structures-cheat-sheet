![Linked list](https://assets.digitalocean.com/articles/alligator/js/linked-lists-implementation/linked-list-insert.gif)

### What is a linked list?

A DS that is very similiar to an array but contains a head, tail and length as properties. Linked lists consist of connected to nodes that point to the next value or null.

### Lists vs Arrays

#### List

1. Do not have indexes
2. Connected Via nodes with a next pointer
3. Random access is not allowed

#### Arrays

1. Indexed in order
2. Insertion and deletion can be expensive
3. Can be accessed at a specific index

### BIG O

|Method|SSL|Array
|insertion| o(1) | o(n)
|removal| o(n) o(1) if removed from beginning | o(1) pop / o(n) from beginning
|searching|o(n)| o(1)
|access|o(n)|o(1)

SLL are great for insertion and deletion instead of arrays
Arrays contains built in index (o1 for searching and access) whereas SLL dont.
