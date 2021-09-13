
export class Queue {
  data: any[]= [];
  top: number;
  constructor (data:[] = []) {
    this.data = data;
    this.top = data.length;
  }

  enqueue<T>(item: T): void {
    this.data[this.top] = item;
    this.top++;
  }

  dequeue<T> ():T {
    this.top --;
    // TODO - remove any native array operators
    return this.data.shift();
  }

  peek<T>(): T {
    return this.data[0];
  }

  size(): number {
    return this.top;
  }

  isEmpty(): boolean {
      return this.top == 0;
  }

}
