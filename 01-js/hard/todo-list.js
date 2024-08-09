class Todo {
  constructor() {
    this.todoList = [];
  }

  add(todo) {
    this.todoList.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todoList.length) {
      this.todoList.splice(indexOfTodo, 1);
    } else {
      console.log(`Index ${indexOfTodo} is out of bounds.`);
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todoList.length) {
      this.todoList[index] = updatedTodo;
    } else {
      console.log(`Index ${index} is out of bounds.`);
    }
  }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todoList.length) {
      return this.todoList[indexOfTodo];
    } else {
      console.log(`Index ${indexOfTodo} is out of bounds.`);
      return null;
    }
  }

  clear() {
    this.todoList = [];
  }
}

module.exports = Todo;
