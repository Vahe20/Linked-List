# Doubly Linked List in JavaScript
A simple implementation of a doubly linked list in JavaScript with common operations like insertion, deletion, reversing, and sorting.

## Features
* Add elements to the front (push_front) or back (push_back)
* Remove elements from the front (pop_front) or back (pop_back)
* Access elements by index (at)
* Insert elements at a specific position (insert)
* Remove elements by value (remove)
* Reverse the list (reverse)
* Sort the list (sort)
* Clear the list (clear)
* Check if the list is empty (isEmpty)
* Get the list size (size)
* Print the list for debugging (print)

## Usage
```js
const list = new LinkedList([10, 20, 30]);

// Add elements
list.push_back(40);
list.push_front(5);

// Insert at index
list.insert(2, 15); // insert 15 at index 2

// Access elements
console.log(list.front()); // 5
console.log(list.back());  // 40
console.log(list.at(2));   // 15

// Remove elements
list.remove(20);           // remove value 20
list.pop_front();          // remove first element
list.pop_back();           // remove last element

// Reverse the list
list.reverse();

// Sort the list
list.sort((a, b) => a - b); // ascending numeric sort

// Print list
list.print(); // < 5 > < 10 > < 15 > null

// Check size
console.log(list.size()); // 3
```

## Methods
* push_front(value) — Adds a new node at the beginning of the list
* push_back(value) — Adds a new node at the end of the list
* pop_front() — Removes the first node
* pop_back() — Removes the last node
* insert(index, value) — Inserts a value at a specific index
* erase(index) — Removes a node at a specific index
* remove(value, equals) — Removes the first node that matches the value
* reverse() — Reverses the order of the list
* front() — Returns the value of the first node
* back() — Returns the value of the last node
* at(index) — Returns the value at a specific index
* size() — Returns the number of nodes
* isEmpty() — Returns true if the list is empty
* clear() — Removes all nodes from the list
* print() — Logs the list to the console
