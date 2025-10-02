class Node {
	constructor(data, next = null, prev = null) {
		this.data = data;
		this.next = next;
		this.prev = prev;
	}
}

class LinkedList {
	#head = null;
	#tail = null;
	#size = 0;

	constructor(iterables = []) {
		for (const item of iterables) {
			this.push_back(item);
		}
	}

	size() {
		return this.#size;
	}

	isEmpty() {
		return this.#size === 0;
	}

	clear() {
		this.#head = null;
		this.#tail = null;
		this.#size = 0;
	}

	push_front(value) {
		const newNode = new Node(value);

		if (this.#head === null) {
			this.#head = newNode;
			this.#tail = newNode;
		} else {
			newNode.next = this.#head;
			this.#head.prev = newNode;
			this.#head = newNode;
		}

		this.#size++;
	}

	push_back(value) {
		const newNode = new Node(value);

		if (this.#head === null) {
			this.#head = newNode;
			this.#tail = newNode;
		} else {
			newNode.prev = this.#tail;
			this.#tail.next = newNode;
			this.#tail = newNode;
		}

		this.#size++;
	}

	pop_front() {
		if (this.#head === null) return null;

		if (this.#head === this.#tail) {
			this.#head = null;
			this.#tail = null;
		} else {
			this.#head = this.#head.next;
			this.#head.prev = null;
		}

		this.#size--;
	}

	pop_back() {
		if (this.#head === null) return null;

		if (this.#head === this.#tail) {
			this.#head = null;
			this.#tail = null;
		} else {
			this.#tail = this.#tail.prev;
			this.#tail.next = null;
		}

		this.#size--;
	}

	front() {
		return this.#head.data;
	}

	back() {
		return this.#tail.data;
	}

	at(index) {
		if (index < 0 || index >= this.#size) return null;

		let current = this.#head;

		for (let i = 0; i < index; ++i) {
			current = current.next;
		}

		return current.data;
	}

	insert(index, value) {
		if (index < 0 || index > this.#size) return false;

		if (index === 0) {
			this.push_front(value);
			return true;
		}

		if (index === this.#size - 1) {
			this.push_back(value);
			return true;
		}

		let current = this.#head;

		for (let i = 0; i < index; ++i) {
			current = current.next;
		}

		const prev = current.prev;
		const newNode = new Node(value, current, prev);

		prev.next = newNode;
		current.prev = newNode;

		this.#size++;
		return true;
	}

	erase(index) {
		if (index < 0 || index >= this.#size) return false;

		if (index === 0) {
			this.pop_front();
			return true;
		}

		if (index === this.#size - 1) {
			this.pop_back();
			return true;
		}

		let current = this.#head;

		for (let i = 0; i < index; ++i) {
			current = current.next;
		}

		const prev = current.prev;
		const next = current.next;

		prev.next = next;
		next.prev = prev;

		this.#size--;
		return true;
	}

	remove(value, equals = Object.is) {
		if (this.#size === 0) return false;

		if (equals(this.#head.data, value)) {
			this.#head = this.#head.next;

			if (this.#head !== null) {
				this.#head.prev = null;
			} else {
				this.#tail = null;
			}

			this.#size--;
			return true;
		}

		let current = this.#head;

		for (let i = 0; i < this.#size; ++i) {
			if (equals(value, current.data)) {
				this.erase(i);
				return true;
			}

			current = current.next;
		}

		return false;
	}

	reverse() {
		let current = this.#head;
		let tmp = null;

		while (current) {
			tmp = current.prev;
			current.prev = current.next;
			current.next = tmp;
			current = current.prev;
		}

		if (tmp !== null) {
			this.#head = tmp.prev;
			this.#tail = tmp;
		}
	}

	// sort(compareFn) {}

	print() {
		let current = this.#head;
		let result = "";
		while (current) {
			result += " < " + current.data + " > ";
			current = current.next;
		}
		console.log(result + "null");
	}
}

const LList = new LinkedList([10, 20, 30]);

LList.push_back(24);
LList.push_back(32);
LList.push_back("hello");
LList.push_back("world");
LList.insert(3, "arr");
LList.print();
console.log(LList.size());
LList.remove(10);
LList.print();
console.log(LList.size());
LList.reverse();
LList.print();
