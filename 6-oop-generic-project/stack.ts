{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;
    get size() {
      return this._size;
    }
    push(value: T) {
      const node = {
        value,
        next: this.head,
      };
      this.head = node;
      this._size++;
    }
    pop(): T {
      if (this.head == null) {
        throw new Error('Stack is empty!!!');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>();
  stack.push('hi');
  stack.push('there');
  stack.push('👋');
  console.log(stack.size);
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.size);

  const stack2 = new StackImpl<number>();
  stack2.push(1);
  stack2.push(2);
  stack2.push(3);
  console.log(stack2.size);
  console.log(stack2.pop());
  console.log(stack2.pop());
  console.log(stack2.pop());
  console.log(stack2.size);
}
