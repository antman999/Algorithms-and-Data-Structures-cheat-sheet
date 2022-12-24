### Doubly linked list

![Linked list](https://miro.medium.com/max/1400/1*NC8H9MNtpKthMlrKYnFIbA.gif)

### Why use it over SLL

When we need constant time removal since we dont need to loop all the way to the end we can start at the tail.

So what is the difference between both? DLL take up more memory than SLL but are superior when needing to work backward.

### BIG O

| Method               | SLL  |                          Array |
| -------------------- | :--: | -----------------------------: |
| insertion            | o(1) |                           o(n) |
| removal              | o(1) | o(1) pop / o(n) from beginning |
| searching and access | o(n) |                           o(1) |
