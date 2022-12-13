import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo; // recibimos el objeto en el formato de la interface

  // como hacemos as interface nos da error si poneos otra cosa
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);

  console.log(todo)
});


const today = new Date();
today.getMonth();

const person = {
  age: 20
};

class Color {}
const red = new Color();
