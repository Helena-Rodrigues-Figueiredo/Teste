import React from "react";

const tarefas = ['Café', 'Academia', 'Compras', 'Estudar'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return (<ul>{ tarefas.map((tarefa) => Task(tarefa))}</ul>)
  }
}

export default App;
