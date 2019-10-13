const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
      let node = new Node(data);

      if (this._head === null) {
       	    this._head = node;
            this._tail = node;
      } else {
        	node.prev = this._tail;
          this._tail.next = node;
	    		this._tail = node;
        }

      this.length++;
      return this;
    }

    head() {
			return this._head.data;
		}

    tail() {
			return this._tail ? this._tail.data : null;
    }

    at(index) {
        let el = this._head;
        for (let i = 0; i < index; i++) {
            el = el.next;
        }
        return el.data;
    }
		
    insertAt(index, data) {
			let node = new Node(data);
			let el = this._head;
			for (let i = 0; i < index - 1; i++) {
					el = el.next;
		}
			if (el !== null) {
					node.next = el.next;
					node.prev = el;
					el.next = node;
					el.next.next.prev = node;
				}
			return this;
		}

    isEmpty() {
      return this.length === 0;
    }

    clear() {
			this._head = null;
            this._tail = null;
			this.length = 0;
            
			return this;
		}

    deleteAt(index) {
			let el = this._head;
			for (let i = 0; i < index - 1; i++) {
				el = el.next;
			}
			if (el.next !== null) {
				el.next = el.next.next;
				el.next.prev = el.next.prev.prev;
			}
			return this;
		}

    reverse() {
			let el = this._head;
			let prev = null;
			while (el) {
				let next = el.next;
				el.next = prev;
				el.prev = next;
				prev = el;
				el = next;
			}
			this._tail = this._head;
			this._head = prev;
			return this;
    }

    indexOf(data) {
			let el = this._head;
			let counter = 0;
			while (el) {
				if (el.data == data) {
					return counter;
				}
				el = el.next;
				counter++;
			}
			return -1;
		}
}

module.exports = LinkedList;